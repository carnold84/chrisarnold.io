import type { ReactNode } from "react";
import { usePathname } from "../router.hooks";
import { matchPath } from "../router.utils";
import { ParamsContext } from "../router.context";

export type RouteDef = {
  path: string;
  element: ReactNode;
};

/** Renders the first route whose path matches, or `fallback`. */
export function Routes({
  routes,
  fallback = null,
}: {
  routes: RouteDef[];
  fallback?: ReactNode;
}) {
  const pathname = usePathname();

  for (const route of routes) {
    const params = matchPath(route.path, pathname);
    if (params) {
      return (
        <ParamsContext.Provider value={params}>
          {route.element}
        </ParamsContext.Provider>
      );
    }
  }

  return <>{fallback}</>;
}
