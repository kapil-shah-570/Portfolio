import Link from "next/link";
import { collections } from "../lib/collections";

export default function Home() {
  return (
    <main className="dashboard">
      <div className="page-heading">
        <div>
          <p className="eyebrow">PORTFOLIO CMS</p>
          <h1>Welcome back</h1>
          <p className="muted">Choose a collection to manage your portfolio content.</p>
        </div>
        <Link className="button secondary" href="/login">Admin account</Link>
      </div>
      <section className="collection-grid" aria-label="Content collections">
        <Link className="collection-card" href="/messages">
          <span className="card-icon">✉</span>
          <span className="card-title">Contact messages</span>
          <span className="muted">View contact form submissions and follow up with visitors.</span>
          <span className="card-link">Open inbox <span aria-hidden>→</span></span>
        </Link>
        {collections.map((collection) => (
          <Link className="collection-card" href={`/${collection.slug}`} key={collection.slug}>
            <span className="card-icon">{collection.icon}</span>
            <span className="card-title">{collection.label}</span>
            <span className="muted">{collection.description}</span>
            <span className="card-link">Manage {collection.label.toLowerCase()} <span aria-hidden>→</span></span>
          </Link>
        ))}
      </section>
      <p className="security-note">Changes are saved to the API. Your admin session expires automatically after 12 hours.</p>
    </main>
  );
}
