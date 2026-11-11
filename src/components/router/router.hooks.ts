import { useContext, useSyncExternalStore } from "react";
import {
  getPathname,
  getServerPathname,
  navigate,
  subscribe,
} from "./router.utils";
import { ParamsContext, type Params } from "./router.types";

export function usePathname() {
  return useSyncExternalStore(subscribe, getPathname, getServerPathname);
}

export function useNavigate() {
  return navigate;
}

export function useParams<T extends Params = Params>() {
  return useContext(ParamsContext) as T;
}
