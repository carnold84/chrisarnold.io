import { useEffect, useState, type ReactNode } from "react";
import { NavigateContext, PathnameContext } from "./router.context";

type RouterProps = {
  children: ReactNode;
  /** Starting path for SSR or tests, where `window` isn't available. */
  initialPath?: string;
};

export function Router({ children, initialPath }: RouterProps) {
  const [pathname, setPathname] = useState(
    () => initialPath ?? window.location.pathname,
  );

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (to: string, { replace = false } = {}) => {
    if (replace) window.history.replaceState(null, "", to);
    else window.history.pushState(null, "", to);
    // Read back from the browser so relative URLs ("../foo") resolve correctly
    setPathname(window.location.pathname);
  };

  return (
    <NavigateContext.Provider value={navigate}>
      <PathnameContext.Provider value={pathname}>
        {children}
      </PathnameContext.Provider>
    </NavigateContext.Provider>
  );
}
