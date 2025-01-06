import React, { CSSProperties, FC, ReactNode, useContext } from "react";
import { ScrollDataContext } from "./stores";

interface ScrollPageProps {
  children: ReactNode | ReactNode[];
  debugBorder?: boolean;
  style?: CSSProperties;
  className?: string;
}

const ScrollPage: FC<ScrollPageProps> = (props) => {
  const { children, debugBorder = false, className, style } = props;
  const { viewportHeight } = useContext(ScrollDataContext);

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
    <div style={pageStyle} className={className}>
      {children}
    </div>
  );
};

export default ScrollPage;
