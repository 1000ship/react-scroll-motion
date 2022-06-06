import { createContext } from "react";
import { initialScrollPage } from "../constants";
import { ScrollPage } from "../types";

export const ScrollPageContext = createContext<ScrollPage>(initialScrollPage);
