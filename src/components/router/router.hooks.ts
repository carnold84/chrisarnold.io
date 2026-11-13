import { useContext } from "react";

import {
  NavigateContext,
  ParamsContext,
  PathnameContext,
  type Params,
} from "./router.context";

function useRequired<T>(value: T | null, hook: string): T {
  if (value === null) throw new Error(`${hook} must be used inside <Router>`);
  return value;
}

export function usePathname() {
  return useRequired(useContext(PathnameContext), "usePathname");
}

export function useNavigate() {
  return useRequired(useContext(NavigateContext), "useNavigate");
}

export function useParams<T extends Params = Params>() {
  return useContext(ParamsContext) as T;
}

export function useIsActive(to: string, { end = true } = {}) {
  const pathname = usePathname();
  const strip = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);
  const current = strip(pathname);
  const target = strip(to.split(/[?#]/)[0]);
  if (current === target) return true;
  if (end) return false;
  return target === "/" ? false : current.startsWith(`${target}/`);
}
