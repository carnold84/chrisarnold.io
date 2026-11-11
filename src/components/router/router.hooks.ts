import { useContext, useSyncExternalStore } from "react";
import {
  getPathname,
  getServerPathname,
  navigate,
  subscribe,
} from "./router.utils";
import { type Params, ParamsContext } from "./router.context";

export function usePathname() {
  return useSyncExternalStore(subscribe, getPathname, getServerPathname);
}

export function useNavigate() {
  return navigate;
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
