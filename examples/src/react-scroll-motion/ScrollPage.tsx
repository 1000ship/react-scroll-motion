import React, { useContext } from "react";
import { ScrollPageContext, ScrollContainerContext } from "./ScrollContext";

interface IProps {
  children: React.ReactNode;
  page: number;
  debugBorder: boolean;
}

const ScrollPage = ({ children, page, debugBorder = false }: IProps) => {
  const { viewportHeight } = useContext(ScrollContainerContext);
  const style: React.CSSProperties = {
    margin: 0,
    padding: 0,
    height: viewportHeight,
    position: "relative",
    boxSizing: "border-box",
    scrollSnapAlign: "center",
    overflow: "hidden",
    ...(debugBorder ? { border: "1px solid red" } : {}),
  };
  return (
    <div style={style}>
      <ScrollPageContext.Provider value={{ page }}>{children}</ScrollPageContext.Provider>
    </div>
  );
};

export default ScrollPage;
