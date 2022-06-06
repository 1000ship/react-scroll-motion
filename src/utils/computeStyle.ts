import { Style } from "../types";

const computeStyle = (style: Style = {}, ...params: any[]): Style => {
  const computedStyle: Style = { ...style };
  for (const key in computedStyle)
    if (typeof (computedStyle as any)[key] === "function")
      (computedStyle as any)[key] = ((computedStyle as any)[key] as Function)(
        ...params
      );
  return computedStyle;
};

export default computeStyle;
