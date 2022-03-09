import environment from "../utils/environment";
import { IAnimation } from "../utils/interface";

export const Sticky = (left: number = 50, top: number = 50): IAnimation => ({
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

export const StickyIn = (left: number = 50, top: number = 50): IAnimation => ({
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

export const StickyOut = (left: number = 50, top: number = 50): IAnimation => ({
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
