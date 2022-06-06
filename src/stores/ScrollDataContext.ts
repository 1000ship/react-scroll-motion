import { createContext } from "react";
import { initialScrollData } from "../constants";
import { ScrollData } from "../types";

export const ScrollDataContext = createContext<ScrollData>(initialScrollData);
