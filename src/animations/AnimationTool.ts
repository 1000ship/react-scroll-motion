import { Animation } from "../types";

type StyleValue = string | number | Function;

const callIfFunc = (value: StyleValue, ...params: any) =>
  typeof value === "function" ? value(...params) : value;

export const batch = (...animations: Animation[]): Animation => {
  const batched: Animation = { in: { style: {} }, out: { style: {} } };
  const batchedTransform: {
    in: StyleValue[];
    out: StyleValue[];
  } = {
    in: [],
    out: [],
  };

  for (const animation of animations) {
    if (batched?.in?.style)
      batched.in.style = {
        ...batched?.in?.style,
        ...animation?.in?.style,
      };
    if (batched?.out?.style)
      batched.out.style = {
        ...batched?.out?.style,
        ...animation?.out?.style,
      };
    if (animation?.in?.style?.transform)
      batchedTransform.in.push(animation.in.style.transform);
    if (animation?.out?.style?.transform)
      batchedTransform.out.push(animation.out.style.transform);
  }

  if (batchedTransform.in.length > 0 && batched?.in?.style)
    batched.in.style.transform = (value: number) =>
      batchedTransform.in
        .map((t: StyleValue) => callIfFunc(t, value))
        .join(" ");
  if (batchedTransform.out.length > 0 && batched?.out?.style)
    batched.out.style.transform = (value: number) =>
      batchedTransform.out
        .map((t: StyleValue) => callIfFunc(t, value))
        .join(" ");

  return batched;
};
