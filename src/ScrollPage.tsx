import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { ScrollDataContext, ScrollPageContext } from "./stores";

interface ScrollPageProps {
  children: ReactNode | ReactNode[];
  debugBorder?: boolean;
  /**
   * @deprecated `page` number will be assigend automatically. You don't have to set it.
   */
  page?: number;
}

const ScrollPage: FC<ScrollPageProps> = (props) => {
  const { children, debugBorder = false } = props;
  const { viewportHeight } = useContext(ScrollDataContext);
  const { page } = useContext(ScrollPageContext);

  const style: CSSProperties = {
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
    <div key={page} style={style}>
      {children}
    </div>
  );
};

export default ScrollPage;
