import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

const AboutPage = lazy(() => import("./pages/about"));
const CodePage = lazy(() => import("./pages/code"));
const DashboardPage = lazy(() => import("./pages/dashboard"));
const NotFoundPage = lazy(() => import("./pages/not-found"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        element: <CodePage />,
        path: "code",
      },
      {
        element: <NotFoundPage />,
        path: "*",
      },
    ],
  },
  {
    element: <DashboardPage />,
    path: "dashboard",
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
