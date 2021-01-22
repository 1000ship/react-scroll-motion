const callIfFunc = (value, ...params) => (typeof value === "function" ? value(...params) : value);

export const batch = (...animations) => {
  const batched = { in: { style: {} }, out: { style: {} } };
  const batchedTransform = {
    in: [],
    out: [],
  };

  for (const animation of animations) {
    batched.in.style = {
      ...batched.in.style,
      ...animation?.in?.style,
    };
    batched.out.style = {
      ...batched.out.style,
      ...animation?.out?.style,
    };
    if (animation?.in?.style?.transform) batchedTransform.in.push(animation.in.style.transform);
    if (animation?.out?.style?.transform) batchedTransform.out.push(animation.out.style.transform);
  }

  if (batchedTransform.in.length > 0)
    batched.in.style.transform = (value) =>
      batchedTransform.in.map((t) => callIfFunc(t, value)).join(" ");
  if (batchedTransform.out.length > 0)
    batched.out.style.transform = (value) =>
      batchedTransform.out.map((t) => callIfFunc(t, value)).join(" ");

  return batched;
};
