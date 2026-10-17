"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ApiError, collectionPath, request, type AdminRecord } from "../../../lib/admin-api";
import { getCollection } from "../../../lib/collections";
import { RecordForm } from "../../../components/RecordForm";

export default function RecordPage() {
  const params = useParams<{ collection: string; id: string }>();
  const router = useRouter();
  const collection = getCollection(params.collection);
  const [record, setRecord] = useState<AdminRecord>();
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!collection || params.id === "new") return;
    let active = true;
    request<AdminRecord>(`${collectionPath(collection)}/${encodeURIComponent(params.id)}`)
      .then((item) => { if (active) setRecord(item); })
      .catch((caught: unknown) => {
        if (active) setError(caught instanceof ApiError ? caught.message : "Could not load this item.");
      });
    return () => { active = false; };
  }, [collection, params.id, retryCount]);
  if (!collection) return <main className="content"><h1>Collection not found</h1><Link href="/">Return to overview</Link></main>;
  if (params.id !== "new" && !record && !error) return <main className="content"><p className="muted">Loading item…</p></main>;

  async function save(values: Record<string, unknown>) {
    if (!collection) throw new Error("Unknown collection.");
    const editing = params.id !== "new";
    try {
      await request(editing ? `${collectionPath(collection)}/${encodeURIComponent(params.id)}` : collectionPath(collection), {
        method: editing ? "PUT" : "POST",
        body: JSON.stringify(values),
      });
      router.push(`/${collection.slug}`);
    } catch (caught) {
      const message = caught instanceof ApiError ? caught.message : "Could not save this item.";
      setError(message);
      throw caught;
    }
  }

  return <main className="content">
    <Link className="back-link" href={`/${collection.slug}`}>← Back to {collection.label}</Link>
    <div className="form-heading"><p className="eyebrow">{params.id === "new" ? "NEW ITEM" : "EDIT ITEM"}</p><h1>{params.id === "new" ? `Create ${collection.singular}` : `Edit ${collection.singular}`}</h1><p className="muted">Fill in the fields below. Slugs define the public URL.</p></div>
    {error && <div className="notice error-notice" role="alert">{error}{params.id !== "new" && <button onClick={() => { setError(""); setRetryCount((count) => count + 1); }}>Retry</button>}</div>}
    {params.id !== "new" && record ? <RecordForm collection={collection} initialValue={record} onSave={save} /> :
      params.id === "new" ? <RecordForm collection={collection} onSave={save} /> : null}
  </main>;
}
