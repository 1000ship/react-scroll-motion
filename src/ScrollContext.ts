import { createContext } from "react";

type ScrollContainerContextType = {
  currentY?: number;
  viewportHeight?: number;
  totalPage?: number;
  totalHeight?: number;
  totalProgress?: number;
  realPage?: number;
  currentPage?: number;
  currentProgress?: number;
};

type ScrollPageContextType = {
  page: number
}

export const ScrollContainerContext = createContext<ScrollContainerContextType>({})
export const ScrollPageContext = createContext<ScrollPageContextType>({page: 0})
