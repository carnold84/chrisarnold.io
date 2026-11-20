import { lazy, type MouseEvent, useSyncExternalStore } from "react";

import { Logo } from "./components/ui/logo";

const About = lazy(() =>
  import("@/routes/about").then((m) => ({ default: m.About })),
);
const Code = lazy(() =>
  import("@/routes/code").then((m) => ({ default: m.Code })),
);

const routes = [
  { element: <About />, id: "about", label: "About", path: "/" },
  { element: <Code />, id: "code", label: "Code", path: "/code" },
];

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

function usePathname() {
  const pathname = useSyncExternalStore(
    subscribe,
    () => window.location.pathname,
  );
  // Remove trailing slash before comparing
  return pathname.replace(/\/+$/, "") || "/";
}

function navigate(evt: MouseEvent<HTMLAnchorElement>) {
  // Let the browser handle new-tab / modified clicks
  if (
    evt.button !== 0 ||
    evt.metaKey ||
    evt.ctrlKey ||
    evt.shiftKey ||
    evt.altKey
  ) {
    return;
  }
  evt.preventDefault();
  window.history.pushState(null, "", evt.currentTarget.href);
  // pushState doesn't fire popstate, so dispatch it to trigger a re-render
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function App() {
  const pathname = usePathname();
  const route = routes.find((r) => r.path === pathname);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="fixed top-0 z-10 flex w-full items-center justify-between p-8">
        <a className="text-text-500" href="/" onClick={navigate} title="Home">
          <Logo />
        </a>
        <nav className="flex">
          <ul className="flex gap-6">
            {routes.map(({ id, label, path }) => (
              <li key={id}>
                <a
                  aria-current={path === pathname ? "page" : undefined}
                  className="font-display text-sm text-text-300 lowercase aria-[current=page]:text-text-500"
                  href={path}
                  onClick={navigate}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="relative grow p-6 sm:p-20">
        {route?.element ?? <h1>Not found</h1>}
      </main>
    </div>
  );
}
