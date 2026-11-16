import type { AppId } from "@/store/windows";

export function pathFor(id: AppId, slug: string) {
  return id === "projects" ? `/projects/${slug}` : `/${id}`;
}

export function setUrl(path: string) {
  if (window.location.pathname !== path) window.history.replaceState(null, "", path);
}