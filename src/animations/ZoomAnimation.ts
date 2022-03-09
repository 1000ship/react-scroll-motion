import { IAnimation } from "../utils/interface";
import { SimpleInterpolation } from "../utils/interpolation";

export const Zoom = (from: number = 10, to: number = 1): IAnimation => ({
  in: {
    style: {
      transform: (value: number) =>
        `scale(${SimpleInterpolation(from, to, value)})`,
    },
  },
  out: {
    style: {
      transform: (value: number) =>
        `scale(${SimpleInterpolation(to, from, value)})`,
    },
  },
});

export const ZoomIn = (from: number = 10, to: number = 1): IAnimation => ({
  in: {
    style: {
      transform: (value: number) =>
        `scale(${SimpleInterpolation(from, to, value)})`,
    },
  },
});

export const ZoomOut = (from: number = 1, to: number = 10): IAnimation => ({
  out: {
    style: {
      transform: (value: number) =>
        `scale(${SimpleInterpolation(from, to, value)})`,
    },
  },
});
