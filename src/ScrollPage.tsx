import React from "react";
import { ScrollPageContext } from "./ScrollContext";

interface IProps {
  children: React.ReactNode;
  page: number;
}

const ScrollPage = ({ children, page }: IProps) => {
  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", position: "relative" }}>
      <ScrollPageContext.Provider value={{ page }}>{children}</ScrollPageContext.Provider>
    </div>
  );
};

export default ScrollPage;
