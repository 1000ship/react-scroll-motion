export const Sticky = (left = 50, top = 50) => ({
  in: {
    style: {
      left: `${left}%`,
      top: `${top}%`,
      transform: "translate(-50%, -50%)",
      position: "fixed",
    },
  },
  out: {
    style: {
      left: `${left}%`,
      top: `${top}%`,
      transform: "translate(-50%, -50%)",
      position: "fixed",
    },
  },
});

export const StickyIn = (left = 50, top = 50) => ({
  in: {
    style: {
      left: `${left}%`,
      top: `${top}%`,
      transform: "translate(-50%, -50%)",
      position: "fixed",
    },
  },
  out: {
    style: {
      left: `${left}%`,
      top: `${top}%`,
      transform: "translate(-50%, -50%)",
      position: "absolute",
    },
  },
});

export const StickyOut = (left = 50, top = 50) => ({
  in: {
    style: {
      left: `${left}%`,
      top: `${top}%`,
      transform: "translate(-50%, -50%)",
      position: "absolute",
    },
  },
  out: {
    style: {
      left: `${left}%`,
      top: `${top}%`,
      transform: "translate(-50%, -50%)",
      position: "fixed",
    },
  },
});
