import type { Easing } from "motion/react";

export const verticalBtnAnimationVariant = {
  initial: { opacity: 0, y: -15 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 15 },
};
