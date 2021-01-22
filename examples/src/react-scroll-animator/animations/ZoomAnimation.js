import { SimpleInterpolation } from "../utils/interpolation";

export const Zoom = (from = 10, to = 1) => ({
  in: {
    style: {
      transform: (value) => `scale(${SimpleInterpolation(from, to, value)})`,
    },
  },
  out: {
    style: {
      transform: (value) => `scale(${SimpleInterpolation(to, from, value)})`,
    },
  },
});

export const ZoomIn = (from = 10, to = 1) => ({
  in: {
    style: {
      transform: (value) => `scale(${SimpleInterpolation(from, to, value)})`,
    },
  },
});

export const ZoomOut = (from = 1, to = 10) => ({
  out: {
    style: {
      transform: (value) => `scale(${SimpleInterpolation(from, to, value)})`,
    },
  },
});
