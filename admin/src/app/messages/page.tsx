"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ApiError, downloadFile, request } from "../../lib/admin-api";

type ContactMessage = {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  emailNotification: "pending" | "sent" | "failed" | "not_configured";
  createdAt: string;
};

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "—" : date.toLocaleString();
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let active = true;
    request<ContactMessage[]>("/api/messages")
      .then((items) => { if (active) setMessages(items); })
      .catch((caught: unknown) => {
        if (active) setError(caught instanceof ApiError ? caught.message : "Could not load contact messages.");
      })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [retryCount]);

  const filteredMessages = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    if (!query) return messages;
    return messages.filter((item) =>
      [item.name, item.email, item.subject, item.message]
        .some((value) => value.toLocaleLowerCase().includes(query)),
    );
  }, [messages, search]);

  async function exportMessages() {
    setExporting(true);
    setError("");
    try {
      await downloadFile("/api/messages/export.csv", "portfolio-contact-messages.csv");
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.message : "Could not export contact messages.");
    } finally {
      setExporting(false);
    }
  }

  async function deleteMessage(item: ContactMessage) {
    if (!window.confirm(`Delete the message from ${item.name}? This cannot be undone.`)) return;
    setError("");
    try {
      await request(`/api/messages/${encodeURIComponent(item._id)}`, { method: "DELETE" });
      setMessages((current) => current.filter((message) => message._id !== item._id));
    } catch (caught) {
      setError(caught instanceof ApiError ? caught.message : "Could not delete this message.");
    }
  }

  return (
    <main className="content">
      <div className="page-heading">
        <div>
          <p className="eyebrow">INBOX</p>
          <h1>Contact messages</h1>
          <p className="muted">Messages sent from the portfolio contact form are saved here.</p>
        </div>
        <button className="button primary" onClick={() => void exportMessages()} disabled={exporting || loading}>
          {exporting ? "Preparing export…" : "↓ Export all as CSV"}
        </button>
      </div>

      {error && (
        <div className="notice error-notice" role="alert">
          {error}
          <button onClick={() => { setLoading(true); setError(""); setRetryCount((count) => count + 1); }}>Retry</button>
        </div>
      )}

      <section className="table-card">
        <div className="table-heading contact-toolbar">
          <div>
            <h2>All messages</h2>
            <p className="muted">{filteredMessages.length} of {messages.length} {messages.length === 1 ? "message" : "messages"}</p>
          </div>
          <label className="search-field">
            <span className="sr-only">Search messages</span>
            <input
              type="search"
              placeholder="Search name, email, subject or message"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>
        </div>

        {loading ? <div className="empty-state">Loading contact messages…</div> :
          filteredMessages.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">✉</span>
              <h3>{messages.length ? "No matching messages" : "No contact messages yet"}</h3>
              <p className="muted">{messages.length ? "Try a different search." : "New submissions will appear here once someone uses your contact form."}</p>
            </div>
          ) : (
            <div className="table-wrap">
              <table className="contact-table">
                <thead><tr><th>Contact</th><th>Subject and message</th><th>Received</th><th>Email status</th><th><span className="sr-only">Actions</span></th></tr></thead>
                <tbody>
                  {filteredMessages.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <strong className="contact-name">{item.name}</strong>
                        <a className="contact-email" href={`mailto:${item.email}`}>{item.email}</a>
                      </td>
                      <td>
                        <strong className="contact-subject">{item.subject || "No subject"}</strong>
                        <details className="message-details">
                          <summary>Read full message</summary>
                          <p>{item.message}</p>
                        </details>
                      </td>
                      <td>{formatDate(item.createdAt)}</td>
                      <td><span className={`email-status ${item.emailNotification}`}>{item.emailNotification.replace("_", " ")}</span></td>
                      <td className="row-actions"><button className="delete-button" onClick={() => void deleteMessage(item)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
      </section>
      <p className="security-note">Export downloads all stored contact submissions in CSV format, which can be opened in Excel.</p>
      <Link className="back-link messages-back" href="/">← Back to overview</Link>
    </main>
  );
}
