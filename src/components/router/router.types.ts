import { createContext } from "react";

export type Params = Record<string, string>;

export const ParamsContext = createContext<Params>({});
