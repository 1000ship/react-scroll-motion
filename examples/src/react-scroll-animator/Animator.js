import React, { useContext } from "react";
import { ScrollContainerContext, ScrollPageContext } from "./ScrollContext";

const Animator = ({ children, animation = {}}) => {
  const {
    currentPage,
    currentProgress,
  } = useContext(ScrollContainerContext);

  const { page } = useContext(ScrollPageContext);

  const filterStyle = (style = {}, ...params) => {
    const filteredStyle = {...style}
    for( const key in filteredStyle )
      if(typeof filteredStyle[key] === "function")
        filteredStyle[key] = filteredStyle[key](...params)
    return filteredStyle
  }

  const calculatedStyle = 
    currentPage === page ? // for current (out)
    { ...filterStyle(animation?.out?.style, currentProgress) }
    : currentPage === page - 1 ? // for next (in)
    { ...filterStyle(animation?.in?.style, currentProgress) }
    : {display: "none"}

  return <div style={calculatedStyle}>{children}</div>;
};

export default Animator;
