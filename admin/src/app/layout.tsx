import type { Metadata } from "next";
import "./globals.css";
import { AdminFrame } from "../components/AdminFrame";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { default: "Portfolio Admin", template: "%s | Portfolio Admin" },
  description: "Manage portfolio content, projects, skills, education, experience, and certificates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><AdminFrame>{children}</AdminFrame></body>
    </html>
  );
}
