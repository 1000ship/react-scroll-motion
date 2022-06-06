import { environment } from "../utils";
import { Animation } from "../types";

export const Sticky = (left: number = 50, top: number = 50): Animation => ({
  in: {
    style: {
      left: () => `${(left * environment.width) / 100}px`,
      top: () => `${(top * environment.height) / 100}px`,
      transform: "translate(-50%, -50%)",
      position: "fixed",
    },
  },
  out: {
    style: {
      left: () => `${(left * environment.width) / 100}px`,
      top: () => `${(top * environment.height) / 100}px`,
      transform: "translate(-50%, -50%)",
      position: "fixed",
    },
  },
});

export const StickyIn = (left: number = 50, top: number = 50): Animation => ({
  in: {
    style: {
      left: () => `${(left * environment.width) / 100}px`,
      top: () => `${(top * environment.height) / 100}px`,
      transform: "translate(-50%, -50%)",
      position: "fixed",
    },
  },
  out: {
    style: {
      left: () => `${(left * environment.width) / 100}px`,
      top: () => `${(top * environment.height) / 100}px`,
      transform: "translate(-50%, -50%)",
      position: "absolute",
    },
  },
});

export const StickyOut = (left: number = 50, top: number = 50): Animation => ({
  in: {
    style: {
      left: `${(left * environment.width) / 100}px`,
      top: `${(top * environment.height) / 100}px`,
      transform: "translate(-50%, -50%)",
      position: "absolute",
    },
  },
  out: {
    style: {
      left: `${(left * environment.width) / 100}px`,
      top: `${(top * environment.height) / 100}px`,
      transform: "translate(-50%, -50%)",
      position: "fixed",
    },
  },
});
