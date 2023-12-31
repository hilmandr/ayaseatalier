export const slideIn = {
  open: {
    width: "480px",

    height: "650px",

    top: "-25px",

    right: "-25px",

    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "100px",

    height: "40px",

    top: "0px",

    right: "0px",

    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const perspective = {
  initial: {
    opacity: 0,

    rotateX: 90,

    translateY: 80,

    translateX: -20,
  },

  enter: (i) => ({
    opacity: 1,

    rotateX: 0,

    translateY: 0,

    translateX: 0,

    // transition: {
    //   duration: 0.65,

    //   delay: 0.03 + i * 0.04,

    //   ease: [0.215, 0.61, 0.355, 1],

    //   opacity: { duration: 0.35 },
    // },
  }),

  exit: {
    opacity: 0,

    // transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

export const wrap = {
  open: {
    right: "520px",

    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    right: "-520px",

    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};
