import React, {
  CSSProperties,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ScrollDataContext, ScrollPageContext } from "./stores";
import { Animation } from "./types";
import { computeStyle } from "./utils";

interface AnimatorProps {
  children: ReactNode | ReactNode[];
  animation: Animation;
  style?: CSSProperties;
  className?: string;
}

const Animator: FC<AnimatorProps> = (props) => {
  const { children, animation, style, className } = props;
  const { currentPage, currentProgress } = useContext(ScrollDataContext);
  const { page } = useContext(ScrollPageContext);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(
    () => (typeof window !== "undefined" ? setIsSSR(false) : undefined),
    []
  );

  const calculatedStyle: CSSProperties | undefined = useMemo(
    () =>
      isSSR
        ? style
        : currentPage === page // for current (out)
        ? ({
            ...computeStyle(animation?.out?.style, currentProgress),
            ...style,
          } as CSSProperties)
        : currentPage === page - 1 // for next (in)
        ? ({
            ...computeStyle(animation?.in?.style, currentProgress),
            ...style,
          } as CSSProperties)
        : { display: "none" },
    [
      isSSR,
      currentPage,
      page,
      animation?.out?.style,
      animation?.in?.style,
      currentProgress,
      style,
    ]
  );

  return (
    <div suppressHydrationWarning style={calculatedStyle} className={className}>
      {children}
    </div>
  );
};

export default Animator;
