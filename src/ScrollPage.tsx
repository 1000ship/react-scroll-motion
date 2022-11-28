import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { ScrollDataContext, ScrollPageContext } from "./stores";

interface ScrollPageProps {
  children: ReactNode | ReactNode[];
  debugBorder?: boolean;
  /**
   * @deprecated `page` number will be assigend automatically. You don't have to set it.
   */
  page?: number;
  style?: CSSProperties;
  className?: string;
}

const ScrollPage: FC<ScrollPageProps> = (props) => {
  const { children, debugBorder = false, className, style } = props;
  const { viewportHeight } = useContext(ScrollDataContext);
  const { page } = useContext(ScrollPageContext);

  const pageStyle: CSSProperties = {
    margin: 0,
    padding: 0,
    height: viewportHeight,
    position: "relative",
    boxSizing: "border-box",
    scrollSnapAlign: "center",
    overflow: "hidden",
    ...(debugBorder ? { border: "1px solid red" } : {}),
    ...style,
  };

  return (
    <div key={page} style={pageStyle} className={className}>
      {children}
    </div>
  );
};

export default ScrollPage;
