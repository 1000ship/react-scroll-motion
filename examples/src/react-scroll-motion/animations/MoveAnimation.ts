import { SimpleInterpolation } from "../utils/interpolation";

export const Move = (
  dx: number = 0,
  dy: number = 100,
  outDx: number | null = null,
  outDy: number | null = -100
) => ({
  in: {
    style: {
      transform: (value: number) =>
        `translate(${SimpleInterpolation(dx, 0, value)}px, ${SimpleInterpolation(dy, 0, value)}px)`,
    },
  },
  out: {
    style: {
      transform: (value: number) =>
        `translate(${SimpleInterpolation(0, outDx || dx, value)}px, ${SimpleInterpolation(
          0,
          outDy || dy,
          value
        )}px)`,
    },
  },
});

export const MoveIn = (dx: number = 0, dy: number = 100) => ({
  in: {
    style: {
      transform: (value: number) =>
        `translate(${SimpleInterpolation(dx, 0, value)}px, ${SimpleInterpolation(dy, 0, value)}px)`,
    },
  },
});

export const MoveOut = (dx: number = 0, dy: number = -100) => ({
  out: {
    style: {
      transform: (value: number) =>
        `translate(${SimpleInterpolation(0, dx, value)}px, ${SimpleInterpolation(0, dy, value)}px)`,
    },
  },
});
