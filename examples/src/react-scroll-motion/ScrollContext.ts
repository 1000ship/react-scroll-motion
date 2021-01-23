import { createContext } from "react";

type ScrollContainerContextType = {
  currentPage?: number;
  currentProgress?: number;
}

type ScrollPageContextType = {
  page: number
}

export const ScrollContainerContext = createContext<ScrollContainerContextType>({})
export const ScrollPageContext = createContext<ScrollPageContextType>({page: 0})
