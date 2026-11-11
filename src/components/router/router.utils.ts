import type { Params } from "./router.types";

type Listener = () => void;
const listeners = new Set<Listener>();

export function notify() {
  for (const l of listeners) l();
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}

export const getPathname = () => window.location.pathname;
export const getServerPathname = () => "/";

export function navigate(to: string, { replace = false } = {}) {
  if (replace) window.history.replaceState(null, "", to);
  else window.history.pushState(null, "", to);
  notify();
}

/**
 * Matches patterns like "/", "/posts/:id", "/files/*".
 * Returns params on match, null otherwise.
 */
export function matchPath(pattern: string, pathname: string): Params | null {
  const patternParts = pattern.split("/").filter(Boolean);
  const pathParts = pathname.split("/").filter(Boolean);
  const params: Params = {};

  for (let i = 0; i < patternParts.length; i++) {
    const p = patternParts[i];
    if (p === "*") {
      params["*"] = pathParts.slice(i).map(decodeURIComponent).join("/");
      return params;
    }
    const segment = pathParts[i];
    if (segment === undefined) return null;
    if (p.startsWith(":")) params[p.slice(1)] = decodeURIComponent(segment);
    else if (p !== segment) return null;
  }

  return patternParts.length === pathParts.length ? params : null;
}
