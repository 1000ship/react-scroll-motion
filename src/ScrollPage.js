import React from "react";
import { ScrollPageContext } from "./ScrollContext";

const ScrollPage = ({ children, page }) => {
  return <div style={{margin: 0, padding: 0, height: "100vh", position: "relative"}}>
    <ScrollPageContext.Provider value={{page}}>
      {children}
    </ScrollPageContext.Provider>
  </div>;
};

export default ScrollPage;
