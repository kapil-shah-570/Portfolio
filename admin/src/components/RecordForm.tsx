"use client";

import { useState, type FormEvent } from "react";
import type { AdminRecord } from "../lib/admin-api";
import type { CollectionDefinition, FieldDefinition } from "../lib/collections";

function initialValue(field: FieldDefinition, value: unknown) {
  if (field.type === "boolean") return Boolean(value ?? field.defaultValue);
  if (field.type === "list") return Array.isArray(value) ? value.join(", ") : "";
  return value == null ? String(field.defaultValue ?? "") : String(value);
}

function formValue(field: FieldDefinition, value: string | boolean) {
  if (field.type === "boolean") return value;
  if (field.type === "list") return String(value).split(",").map((item) => item.trim()).filter(Boolean);
  if (field.type === "number") return value === "" ? null : Number(value);
  return value;
}

function makeSlug(value: string) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function RecordForm({
  collection,
  initialValue: record,
  onSave,
}: {
  collection: CollectionDefinition;
  initialValue?: AdminRecord;
  onSave: (values: Record<string, unknown>) => Promise<void>;
}) {
  const [values, setValues] = useState<Record<string, string | boolean>>(() =>
    Object.fromEntries(collection.fields.map((field) => [field.key, initialValue(field, record?.[field.key])])),
  );
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);

  function update(field: FieldDefinition, value: string | boolean) {
    if (field.key === "slug") setSlugEdited(true);
    setValues((previous) => ({
      ...previous,
      [field.key]: value,
      ...(field.key === collection.titleField && !slugEdited ? { slug: makeSlug(String(value)) } : {}),
    }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const payload = Object.fromEntries(collection.fields.map((field) => [field.key, formValue(field, values[field.key] ?? (field.type === "boolean" ? false : ""))]));
    try {
      await onSave(payload);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Unable to save changes.");
    } finally {
      setBusy(false);
    }
  }

  return <form className="record-form" onSubmit={submit}>
    <div className="form-grid">
      {collection.fields.map((field) => <label className={`field ${field.type === "boolean" ? "toggle-field" : ""}`} key={field.key}>
        <span>{field.label}{field.required && <b aria-hidden> *</b>}</span>
        {field.type === "boolean" ? <input checked={Boolean(values[field.key])} onChange={(event) => update(field, event.target.checked)} type="checkbox" /> :
          field.type === "textarea" || field.type === "list" ?
            <textarea required={field.required} rows={field.type === "list" ? 2 : 5} value={String(values[field.key] ?? "")} onChange={(event) => update(field, event.target.value)} placeholder={field.type === "list" ? "Item one, item two, item three" : ""} /> :
            <input required={field.required} type={field.type === "number" ? "number" : field.type === "date" ? "text" : field.type === "url" ? "url" : "text"} inputMode={field.type === "number" ? "numeric" : undefined} value={String(values[field.key] ?? "")} onChange={(event) => update(field, event.target.value)} placeholder={field.key === "slug" ? "auto-generated-from-title" : ""} />}
        {field.hint && <small>{field.hint}</small>}
      </label>)}
    </div>
    {error && <p className="form-error" role="alert">{error}</p>}
    <div className="form-actions"><button className="button secondary" disabled={busy} type="button" onClick={() => window.history.back()}>Cancel</button><button className="button primary" disabled={busy}>{busy ? "Saving…" : "Save changes"}</button></div>
  </form>;
}
