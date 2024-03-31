import { AnimatePresence } from "framer-motion";
import { Suspense, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, Outlet } from "react-router-dom";

import Logo from "../../components/Logo";
import MainMenuItem from "../../components/MainMenuItem";

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="fixed top-0 z-10 flex w-full items-center justify-between p-8">
        <NavLink className="text-text-500" title="Home" to="/">
          <Logo />
        </NavLink>
        <nav className="flex">
          <ul className="flex gap-6">
            {["About", "Code"].map((route) => {
              return (
                <li key={route}>
                  <MainMenuItem
                    label={route}
                    to={route === "About" ? "/" : route.toLowerCase()}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
        <nav className="hidden">
          <button onClick={onToggleMenu}>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.14276 0.125H21.9998V2.125H3.14276V0.125Z"
                fill="currentcolor"
              />
              <rect
                x="7.85724"
                y="13.875"
                width="14.1428"
                height="2"
                fill="currentcolor"
              />
              <rect y="7" width="21.9999" height="2" fill="currentcolor" />
            </svg>
          </button>
        </nav>
      </header>
      <main className="relative grow p-6 sm:p-20">
        <AnimatePresence mode="wait">
          <Suspense>
            <Outlet />
          </Suspense>
        </AnimatePresence>
      </main>
      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <div className="absolute left-0 top-0 h-full w-full bg-neutral-50">
              menu
            </div>
          )}
        </AnimatePresence>,
        document.querySelector("#portal")!,
      )}
    </div>
  );
};

export default MainLayout;
