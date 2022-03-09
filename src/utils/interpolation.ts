export const SimpleInterpolation = (
  from: number,
  to: number,
  value: number
): number => {
  return from * (1 - value) + to * value;
};
