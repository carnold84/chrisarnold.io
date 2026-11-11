import { type ReactNode } from "react";

import Logo from "@/components/Logo";
import MainMenuItem from "@/components/MainMenuItem";

export interface MenuItem {
  id: string;
  isActive?: boolean;
  label: string;
  to: string;
}

export interface RootLayoutProps {
  children: ReactNode;
  menuItems: MenuItem[];
  onRouteChange: (routeId: string) => void;
}

const RootLayout = ({
  children,
  menuItems,
  onRouteChange,
}: RootLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="fixed top-0 z-10 flex w-full items-center justify-between p-8">
        <a className="text-text-500" title="Home">
          <Logo />
        </a>
        <nav className="flex">
          <ul className="flex gap-6">
            {menuItems?.map((item) => {
              return (
                <li key={item.id}>
                  <MainMenuItem
                    isActive={item.isActive}
                    onClick={onRouteChange}
                    label={item.label}
                    to={item.to}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main className="relative grow p-6 sm:p-20">{children}</main>
    </div>
  );
};

export default RootLayout;
