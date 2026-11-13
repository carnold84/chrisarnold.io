import { lazy } from "react";

import { Link, NavLink, Router, Routes } from "@/components/router";

import { Logo } from "./components/ui/logo";

const About = lazy(() =>
  import("@/routes/about").then((m) => ({ default: m.About })),
);
const Code = lazy(() =>
  import("@/routes/code").then((m) => ({ default: m.Code })),
);

const routes = [
  {
    element: <About />,
    id: "about",
    label: "About",
    path: "/",
  },
  {
    element: <Code />,
    id: "code",
    label: "Code",
    path: "/code",
  },
];

export function App() {
  return (
    <Router>
      <div className="flex min-h-screen w-full flex-col">
        <header className="fixed top-0 z-10 flex w-full items-center justify-between p-8">
          <Link className="text-text-500" title="Home" to="/">
            <Logo />
          </Link>
          <nav className="flex">
            <ul className="flex gap-6">
              {routes.map((route) => {
                return (
                  <li key={route.id}>
                    <NavLink
                      className="font-display text-sm text-text-300 lowercase [.active]:text-text-500"
                      to={route.path}
                    >
                      {route.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        <main className="relative grow p-6 sm:p-20">
          <Routes routes={routes} fallback={<h1>Not found</h1>} />
        </main>
      </div>
    </Router>
  );
}
