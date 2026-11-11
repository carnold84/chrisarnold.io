import { type ReactNode } from "react";

import { usePathname } from "./router.hooks";
import { matchPath } from "./router.utils";
import { ParamsContext } from "./router.context";

export type RouteDef = {
  path: string;
  element: ReactNode;
};

export interface RouterProps {
  routes: RouteDef[];
  fallback?: ReactNode;
}

export function Router({ routes, fallback = null }: RouterProps) {
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
