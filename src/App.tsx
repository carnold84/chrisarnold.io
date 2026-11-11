import { lazy } from "react";
import { Router, type RouteDef } from "@/components/Router";

const About = lazy(() =>
  import("@/routes/About").then((m) => ({ default: m.About })),
);
const Code = lazy(() =>
  import("@/routes/Code").then((m) => ({ default: m.Code })),
);

export function App() {
  const routes: RouteDef[] = [
    {
      element: <About />,
      path: "/",
    },
    {
      element: <Code />,
      path: "/code",
    },
  ];

  return <Router routes={routes} fallback={<h1>Not found</h1>} />;
}
