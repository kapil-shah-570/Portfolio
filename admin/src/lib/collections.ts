export type FieldType = "text" | "textarea" | "number" | "boolean" | "date" | "url" | "list";

export type FieldDefinition = {
  key: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  hint?: string;
  defaultValue?: string | boolean;
};

export type CollectionDefinition = {
  slug: string;
  label: string;
  singular: string;
  description: string;
  icon: string;
  titleField: string;
  fields: FieldDefinition[];
};

export const collections: CollectionDefinition[] = [
  {
    slug: "blogs", label: "Blogs", singular: "blog post", description: "Write and publish articles.", icon: "✎", titleField: "title",
    fields: [
      { key: "title", label: "Title", required: true }, { key: "slug", label: "Slug", required: true, hint: "Used in the public URL. Automatically suggested from the title." },
      { key: "excerpt", label: "Excerpt", type: "textarea", required: true }, { key: "content", label: "Article content", type: "textarea" },
      { key: "cover", label: "Cover image URL", type: "url" }, { key: "date", label: "Publish date", type: "date", required: true },
      { key: "author", label: "Author" }, { key: "readingTime", label: "Reading time (minutes)", type: "number" },
      { key: "tags", label: "Tags", type: "list", hint: "Separate items with commas." }, { key: "published", label: "Published", type: "boolean", defaultValue: true },
    ],
  },
  {
    slug: "certificates", label: "Certificates", singular: "certificate", description: "Manage credentials and verification links.", icon: "◇", titleField: "title",
    fields: [
      { key: "title", label: "Certificate title", required: true }, { key: "slug", label: "Slug", required: true },
      { key: "issuer", label: "Issuing organization", required: true }, { key: "date", label: "Issue date", type: "date", required: true },
      { key: "image", label: "Certificate image URL", type: "url" }, { key: "description", label: "Description", type: "textarea" },
      { key: "skills", label: "Skills covered", type: "list" }, { key: "credentialId", label: "Credential ID" },
      { key: "credentialUrl", label: "Credential verification URL", type: "url" },
    ],
  },
  {
    slug: "skills", label: "Skills", singular: "skill", description: "Showcase your skills and expertise.", icon: "✳", titleField: "name",
    fields: [
      { key: "name", label: "Skill name", required: true }, { key: "slug", label: "Slug", required: true },
      { key: "category", label: "Category", required: true }, { key: "icon", label: "Icon (emoji or short label)" },
      { key: "level", label: "Skill level (0–100)", type: "number", required: true }, { key: "summary", label: "Summary", type: "textarea" },
      { key: "description", label: "Description", type: "textarea" }, { key: "yearsOfExperience", label: "Years of experience", type: "number" },
      { key: "highlights", label: "Highlights", type: "list" }, { key: "tools", label: "Tools", type: "list" },
    ],
  },
  {
    slug: "projects", label: "Projects", singular: "project", description: "Update your portfolio projects.", icon: "▣", titleField: "title",
    fields: [
      { key: "title", label: "Project title", required: true }, { key: "slug", label: "Slug", required: true },
      { key: "description", label: "Short description", type: "textarea", required: true }, { key: "longDescription", label: "Full description", type: "textarea" },
      { key: "image", label: "Cover image URL", type: "url" }, { key: "featured", label: "Feature on home page", type: "boolean" },
      { key: "tags", label: "Tags", type: "list" }, { key: "techStack", label: "Technology stack", type: "list" },
      { key: "gallery", label: "Gallery image URLs", type: "list" }, { key: "client", label: "Client" }, { key: "role", label: "Your role" },
      { key: "duration", label: "Duration" }, { key: "completedAt", label: "Completed at" },
      { key: "liveUrl", label: "Live project URL", type: "url" }, { key: "repoUrl", label: "Repository URL", type: "url" },
    ],
  },
  {
    slug: "experiences", label: "Experience", singular: "experience", description: "Manage your roles and work history.", icon: "⌁", titleField: "title",
    fields: [
      { key: "title", label: "Role title", required: true }, { key: "slug", label: "Slug", required: true },
      { key: "company", label: "Company", required: true }, { key: "companyLogo", label: "Company logo URL", type: "url" },
      { key: "companyUrl", label: "Company website", type: "url" }, { key: "location", label: "Location" },
      { key: "startDate", label: "Start date", type: "date", required: true }, { key: "endDate", label: "End date", type: "date" },
      { key: "current", label: "Current role", type: "boolean" }, { key: "type", label: "Employment type", required: true },
      { key: "summary", label: "Summary", type: "textarea" }, { key: "description", label: "Description", type: "textarea" },
      { key: "responsibilities", label: "Responsibilities", type: "list" }, { key: "achievements", label: "Achievements", type: "list" },
      { key: "techStack", label: "Technology stack", type: "list" },
    ],
  },
  {
    slug: "educations", label: "Education", singular: "education entry", description: "Manage education and learning history.", icon: "⌂", titleField: "degree",
    fields: [
      { key: "degree", label: "Degree or qualification", required: true }, { key: "slug", label: "Slug", required: true },
      { key: "institution", label: "Institution", required: true }, { key: "location", label: "Location" },
      { key: "startDate", label: "Start date", type: "date", required: true }, { key: "endDate", label: "End date", type: "date" },
      { key: "logo", label: "Institution logo URL", type: "url" }, { key: "description", label: "Description", type: "textarea" },
    ],
  },
];

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}
