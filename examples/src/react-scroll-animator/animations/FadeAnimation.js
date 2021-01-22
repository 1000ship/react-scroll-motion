import { SimpleInterpolation } from "../utils/interpolation";

export const Fade = (from = 0, to = 1) => ({
  in: {
    style: {
      opacity: (value) => SimpleInterpolation(from, to, value),
    },
  },
  out: {
    style: {
      opacity: (value) => SimpleInterpolation(to, from, value),
    },
  },
});

export const FadeIn = (from = 0, to = 1) => ({
  in: {
    style: {
      opacity: (value) => SimpleInterpolation(from, to, value),
    },
  },
});

export const FadeOut = (from = 0, to = 1) => ({
  out: {
    style: {
      opacity: (value) => SimpleInterpolation(from, to, value),
    },
  },
});
