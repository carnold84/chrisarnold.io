import { createContext } from "react";

type NavigateOptions = { replace?: boolean };
type NavigateFn = (to: string, options?: NavigateOptions) => void;
export type Params = Record<string, string>;

export const PathnameContext = createContext<string | null>(null);
export const NavigateContext = createContext<NavigateFn | null>(null);
export const ParamsContext = createContext<Params>({});
