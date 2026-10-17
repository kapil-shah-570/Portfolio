const fs = require('node:fs/promises');
const path = require('node:path');
const { mongoose } = require('../services/mongodb');

class MongoCollectionModel {
  constructor({ name, fields, required, titleField, initialRecords = [] }) {
    this.name = name;
    this.fields = fields;
    this.required = required;
    this.titleField = titleField;
    this.initialRecords = initialRecords;
    this.dataDirectory = process.env.DATA_DIRECTORY || path.resolve(__dirname, '../../data');
    this.filePath = path.join(this.dataDirectory, `${name}.json`);
    const schema = new mongoose.Schema(
      { _id: { type: String, required: true }, slug: { type: String, required: true } },
      { collection: name, strict: false, versionKey: false },
    );
    schema.index({ slug: 1 }, { unique: true });
    this.collection = mongoose.model(
      `Portfolio_${name}`,
      schema,
    );
  }

  async migrateLegacyRecords() {
    const count = await this.collection.countDocuments();
    if (count) return;

    let records = this.initialRecords;
    try {
      const contents = await fs.readFile(this.filePath, 'utf8');
      const storedRecords = JSON.parse(contents);
      if (!Array.isArray(storedRecords)) {
        throw new Error(`Data file for "${this.name}" must contain a JSON array.`);
      }
      if (storedRecords.length) records = storedRecords;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    if (records.length) {
      await this.collection.insertMany(records, { ordered: true });
    }
  }

  async ensureStorage() {
    await this.collection.init();
    await this.migrateLegacyRecords();
  }

  normalize(payload, { preserveEmpty = false } = {}) {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      const error = new Error('Request body must be a JSON object.');
      error.status = 400;
      throw error;
    }
    const unknownFields = Object.keys(payload).filter((key) => key !== '_id' && key !== 'id' && !this.fields[key]);
    if (unknownFields.length) {
      const error = new Error(`Unsupported field(s): ${unknownFields.join(', ')}.`);
      error.status = 400;
      throw error;
    }

    const record = {};
    for (const [key, type] of Object.entries(this.fields)) {
      const value = payload[key];
      if (value === undefined) continue;
      if (value === null || value === '') {
        if (!preserveEmpty) continue;
        if (type === 'string') record[key] = '';
        else if (type === 'number') record[key] = null;
        else if (type === 'list') record[key] = [];
        else if (type === 'boolean') record[key] = false;
        continue;
      }
      if (type === 'string') {
        if (typeof value !== 'string') this.invalidField(key, 'text');
        record[key] = value.trim();
      } else if (type === 'number') {
        const number = Number(value);
        if (!Number.isFinite(number)) this.invalidField(key, 'number');
        record[key] = number;
      } else if (type === 'boolean') {
        if (typeof value !== 'boolean') this.invalidField(key, 'true or false');
        record[key] = value;
      } else if (type === 'list') {
        if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
          this.invalidField(key, 'a list of text values');
        }
        record[key] = value.map((item) => item.trim()).filter(Boolean);
      }
    }

    const sourceForSlug = record[this.titleField];
    const inputSlug = typeof payload.slug === 'string' ? payload.slug : '';
    record.slug = (inputSlug || sourceForSlug || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 120);
    if (!record.slug) {
      const error = new Error('A title or slug is required to generate the public URL slug.');
      error.status = 400;
      throw error;
    }

    const missing = this.required.filter((key) => record[key] === undefined || record[key] === '');
    if (missing.length) {
      const error = new Error(`Required field(s) are missing: ${missing.join(', ')}.`);
      error.status = 400;
      throw error;
    }
    if (this.name === 'skills' && record.level !== undefined && (record.level < 0 || record.level > 100)) {
      const error = new Error('Skill level must be between 0 and 100.');
      error.status = 400;
      throw error;
    }
    return record;
  }

  invalidField(key, expected) {
    const error = new Error(`"${key}" must be ${expected}.`);
    error.status = 400;
    throw error;
  }

  async list() {
    return this.collection.find().sort({ updatedAt: -1 }).lean();
  }

  async findById(id) {
    return this.collection.findById(id).lean();
  }

  async assertUniqueSlug(slug, excludeId) {
    const query = { slug };
    if (excludeId) query._id = { $ne: excludeId };
    if (await this.collection.exists(query)) {
      const error = new Error(`The slug "${slug}" is already in use.`);
      error.status = 409;
      throw error;
    }
  }

  async create(payload) {
    const record = this.normalize(payload);
    await this.assertUniqueSlug(record.slug);
    const now = new Date().toISOString();
    return this.collection.create({
      ...record,
      _id: new mongoose.Types.ObjectId().toString(),
      createdAt: now,
      updatedAt: now,
    });
  }

  async update(id, payload) {
    const record = this.normalize(payload, { preserveEmpty: true });
    await this.assertUniqueSlug(record.slug, id);
    return this.collection.findByIdAndUpdate(
      id,
      { $set: { ...record, updatedAt: new Date().toISOString() } },
      { new: true, runValidators: true },
    ).lean();
  }

  async remove(id) {
    const result = await this.collection.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}

module.exports = MongoCollectionModel;
