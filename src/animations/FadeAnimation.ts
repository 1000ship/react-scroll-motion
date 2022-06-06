import { Animation } from "../types";
import { SimpleInterpolation } from "../utils";

export const Fade = (from: number = 0, to: number = 1): Animation => ({
  in: {
    style: {
      opacity: (value: number) => SimpleInterpolation(from, to, value),
    },
  },
  out: {
    style: {
      opacity: (value: number) => SimpleInterpolation(to, from, value),
    },
  },
});

export const FadeIn = (from: number = 0, to: number = 1): Animation => ({
  in: {
    style: {
      opacity: (value: number) => SimpleInterpolation(from, to, value),
    },
  },
});

export const FadeOut = (from: number = 0, to: number = 1): Animation => ({
  out: {
    style: {
      opacity: (value: number) => SimpleInterpolation(from, to, value),
    },
  },
});
