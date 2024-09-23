export const animationForHeader = {
  hidden: {
    opacity: 0,
    y: -50,
    rotate: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      type: "spring",
      dumping: 10,
      stiffness: 40,
    },
  },
};

export const staggerOpacity = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const fromTop = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const infinityScroll = {
  hidden: {
    x: 0,
  },
  visible: {
    x: "-100%",
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay: 0,
    },
  },
};
export const reverseInfinityScroll = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay: 0,
    },
  },
};
