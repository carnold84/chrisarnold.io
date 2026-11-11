import { type JSX, type LazyExoticComponent } from "react";

export interface BaseRoute {
  element: LazyExoticComponent<() => JSX.Element> | JSX.Element;
  id: string;
}

export interface RouteProps {
  route: BaseRoute;
}

export function Route({ route }: RouteProps) {
  const { element } = route;

  if (typeof element === "function") {
    const ElementComponent = element;

    return <ElementComponent />;
  }

  return element;
}
