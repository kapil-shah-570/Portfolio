"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { collections } from "../lib/collections";
import { request } from "../lib/admin-api";

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (pathname === "/login") return;

    request<{ authenticated: boolean }>("/api/admin/session")
      .then(() => setReady(true))
      .catch(() => {
        router.replace("/login");
      });
    const handleExpiredSession = () => router.replace("/login");
    window.addEventListener("admin-session-expired", handleExpiredSession);
    return () => window.removeEventListener("admin-session-expired", handleExpiredSession);
  }, [pathname, router]);

  if (pathname === "/login") return <>{children}</>;
  if (!ready) return <main className="loading-screen">Checking admin access…</main>;

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <Link href="/" className="brand"><span className="brand-mark">K</span><span>Portfolio <small>CONTENT STUDIO</small></span></Link>
        <p className="nav-label">WORKSPACE</p>
        <nav className="side-nav">
          <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} href="/">⌂ <span>Overview</span></Link>
          <Link className={`nav-link ${pathname.startsWith("/messages") ? "active" : ""}`} href="/messages">
            <span className="nav-icon">✉</span><span>Messages</span>
          </Link>
          {collections.map((collection) => (
            <Link className={`nav-link ${pathname.startsWith(`/${collection.slug}`) ? "active" : ""}`} href={`/${collection.slug}`} key={collection.slug}>
              <span className="nav-icon">{collection.icon}</span><span>{collection.label}</span>
            </Link>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <a className="nav-link" href={process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"} target="_blank" rel="noreferrer">↗ <span>View portfolio</span></a>
          <button className="nav-link logout" onClick={() => {
            void request("/api/admin/logout", { method: "POST" })
              .then(() => router.replace("/login"))
              .catch((error: unknown) => {
                console.error("Could not contact the API to end the admin session.", error);
                router.replace("/login");
              });
          }}>⇥ <span>Sign out</span></button>
        </div>
      </aside>
      <div className="main-column">
        <header className="topbar"><span>Content management</span><span className="status"><i /> API connected</span></header>
        {children}
      </div>
    </div>
  );
}
