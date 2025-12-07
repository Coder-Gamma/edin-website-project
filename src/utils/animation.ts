export const gridContainerVarients = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.45,
    },
  },
};

export const gridCardsVarients = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
export const textVarient = {
  paila: {
    opacity: 0,
    y: 100,
  },
  paxi: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export const leftVarient = {
  paila: {
    opacity: 0,
    x: -100,
  },
  paxi: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export const rightVarient = {
  paila: {
    opacity: 0,
    x: 100,
  },
  paxi: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};
