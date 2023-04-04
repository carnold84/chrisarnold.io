import { AnimatePresence } from "framer-motion";
import { lazy, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Logo from "./components/Logo";
import MainMenuItem from "./components/MainMenuItem";

const AboutPage = lazy(() => import("./pages/about"));
const CodePage = lazy(() => import("./pages/code"));
const DesignPage = lazy(() => import("./pages/design"));

const App = () => {
  const location = useLocation();
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
          <Routes location={location} key={location.pathname}>
            <Route index element={<AboutPage />} />
            <Route path="code" element={<CodePage />} />
            <Route path="design/*" element={<DesignPage />}>
              <Route path=":slug" element={<DesignPage />} />
            </Route>
            <Route path="*" element={<div>Not found</div>} />
          </Routes>
        </AnimatePresence>
      </main>
      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 h-full w-full bg-neutral-50">
              menu
            </div>
          )}
        </AnimatePresence>,
        document.querySelector("#portal")!
      )}
    </div>
  );
};

export default App;
