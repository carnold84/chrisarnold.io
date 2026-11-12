import { lazy } from "react";

import { Link, NavLink, Router, Routes } from "@/components/router";

import { Logo } from "./components/ui/logo";

const About = lazy(() => import("@/routes/about").then((m) => ({ default: m.About })));
const Code = lazy(() => import("@/routes/code").then((m) => ({ default: m.Code })));

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
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/code">Code</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main className="relative grow p-6 sm:p-20">
          <Routes
            routes={[
              {
                element: <About />,
                path: "/",
              },
              {
                element: <Code />,
                path: "/code",
              },
            ]}
            fallback={<h1>Not found</h1>}
          />
        </main>
      </div>
    </Router>
  );
}
