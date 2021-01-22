import { SimpleInterpolation } from "../interpolation";

export const Move = (dx = 0, dy = 100, outDx = null, outDy = -100) => ({
  in: {
    style: {
      transform: (value) =>
        `translate(${SimpleInterpolation(dx, 0, value)}px, ${SimpleInterpolation(dy, 0, value)}px)`,
    },
  },
  out: {
    style: {
      transform: (value) =>
        `translate(${SimpleInterpolation(0, outDx || dx, value)}px, ${SimpleInterpolation(0, outDy || dy, value)}px)`,
    },
  },
});

export const MoveIn = (dx = 0, dy = 100) => ({
  in: {
    style: {
      transform: (value) =>
        `translate(${SimpleInterpolation(dx, 0, value)}px, ${SimpleInterpolation(dy, 0, value)}px)`,
    },
  },
});

export const MoveOut = (dx = 0, dy = -100) => ({
  out: {
    style: {
      transform: (value) =>
        `translate(${SimpleInterpolation(0, dx, value)}px, ${SimpleInterpolation(0, dy, value)}px)`,
    },
  },
});
