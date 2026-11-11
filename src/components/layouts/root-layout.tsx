import { type ReactNode } from "react";

import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/router";

export interface RootLayoutProps {
  children: ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="fixed top-0 z-10 flex w-full items-center justify-between p-8">
        <a className="text-text-500" title="Home">
          <Logo />
        </a>
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
      <main className="relative grow p-6 sm:p-20">{children}</main>
    </div>
  );
}
