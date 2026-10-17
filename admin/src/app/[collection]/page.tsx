"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ApiError, collectionPath, request, type AdminRecord } from "../../lib/admin-api";
import { getCollection } from "../../lib/collections";

export default function CollectionPage() {
  const params = useParams<{ collection: string }>();
  const collection = getCollection(params.collection);
  const [records, setRecords] = useState<AdminRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    if (!collection) return;
    let active = true;
    request<AdminRecord[]>(collectionPath(collection))
      .then((items) => { if (active) setRecords(items); })
      .catch((caught: unknown) => {
        if (active) setError(caught instanceof ApiError ? caught.message : "Could not load these items.");
      })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [collection, retryCount]);

  if (!collection) return <main className="content"><h1>Collection not found</h1><Link href="/">Return to overview</Link></main>;

  async function remove(record: AdminRecord) {
    if (!collection) return;
    if (!window.confirm(`Delete “${String(record[collection.titleField] ?? record.slug)}”? This cannot be undone.`)) return;
    try {
      await request(`${collectionPath(collection)}/${encodeURIComponent(record._id)}`, { method: "DELETE" });
      setRecords((items) => items.filter((item) => item._id !== record._id));
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.message : "Could not delete this item.");
    }
  }

  return (
    <main className="content">
      <div className="page-heading">
        <div><p className="eyebrow">CONTENT COLLECTION</p><h1>{collection.label}</h1><p className="muted">{collection.description}</p></div>
        <Link className="button primary" href={`/${collection.slug}/new`}>＋ Add {collection.singular}</Link>
      </div>
      {error && <div className="notice error-notice" role="alert">{error}<button onClick={() => { setLoading(true); setError(""); setRetryCount((count) => count + 1); }}>Retry</button></div>}
      <section className="table-card">
        <div className="table-heading"><div><h2>All {collection.label.toLowerCase()}</h2><p className="muted">{records.length} {records.length === 1 ? "item" : "items"}</p></div></div>
        {loading ? <div className="empty-state">Loading {collection.label.toLowerCase()}…</div> :
          records.length === 0 ? <div className="empty-state"><span className="empty-icon">{collection.icon}</span><h3>No {collection.label.toLowerCase()} yet</h3><p className="muted">Create your first {collection.singular} to get started.</p><Link className="button secondary" href={`/${collection.slug}/new`}>Create {collection.singular}</Link></div> :
            <div className="table-wrap"><table><thead><tr><th>Title</th><th>Slug</th><th>Updated</th><th><span className="sr-only">Actions</span></th></tr></thead><tbody>
              {records.map((record) => <tr key={record._id}><td className="record-title">{String(record[collection.titleField] ?? "Untitled")}</td><td><code>/{collection.slug}/{record.slug}</code></td><td>{record.updatedAt ? new Date(String(record.updatedAt)).toLocaleDateString() : "—"}</td><td className="row-actions"><Link href={`/${collection.slug}/${encodeURIComponent(record._id)}`}>Edit</Link><button className="delete-button" onClick={() => void remove(record)}>Delete</button></td></tr>)}
            </tbody></table></div>}
      </section>
    </main>
  );
}
