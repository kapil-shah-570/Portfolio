import type { CollectionDefinition } from "./collections";

const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") ?? "http://localhost:5000";

export class ApiError extends Error {
  constructor(message: string, public readonly status: number) {
    super(message);
    this.name = "ApiError";
  }
}

export type AdminRecord = { _id: string; slug: string; [key: string]: unknown };

export async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  let response: Response;
  try {
    response = await fetch(`${apiUrl}${path}`, {
      ...options,
      headers,
      cache: "no-store",
      credentials: "include",
    });
  } catch {
    throw new ApiError(`Could not reach the API at ${apiUrl}. Check that the backend is running.`, 0);
  }

  const result = await response.json().catch(() => ({})) as { error?: string } & T;
  if (response.status === 401 && typeof window !== "undefined" && !path.endsWith("/login")) {
    window.dispatchEvent(new Event("admin-session-expired"));
  }
  if (!response.ok) throw new ApiError(result.error ?? `Request failed (${response.status}).`, response.status);
  return result;
}

export async function downloadFile(path: string, filename: string): Promise<void> {
  let response: Response;
  try {
    response = await fetch(`${apiUrl}${path}`, { credentials: "include", cache: "no-store" });
  } catch {
    throw new ApiError(`Could not reach the API at ${apiUrl}. Check that the backend is running.`, 0);
  }

  if (response.status === 401 && typeof window !== "undefined") {
    window.dispatchEvent(new Event("admin-session-expired"));
  }
  if (!response.ok) {
    const result = await response.json().catch(() => ({})) as { error?: string };
    throw new ApiError(result.error ?? `Download failed (${response.status}).`, response.status);
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

export function collectionPath(collection: CollectionDefinition) {
  return `/api/${collection.slug}`;
}
