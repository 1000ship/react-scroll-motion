import { Animation } from "../types";
import { SimpleInterpolation } from "../utils";

export const Zoom = (from: number = 10, to: number = 1): Animation => ({
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

export const ZoomIn = (from: number = 10, to: number = 1): Animation => ({
  in: {
    style: {
      transform: (value: number) =>
        `scale(${SimpleInterpolation(from, to, value)})`,
    },
  },
});

export const ZoomOut = (from: number = 1, to: number = 10): Animation => ({
  out: {
    style: {
      transform: (value: number) =>
        `scale(${SimpleInterpolation(from, to, value)})`,
    },
  },
});
