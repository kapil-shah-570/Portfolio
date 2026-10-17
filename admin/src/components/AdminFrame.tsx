import type { ReactNode } from "react";
import { AdminShell } from "./AdminShell";

export function AdminFrame({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
