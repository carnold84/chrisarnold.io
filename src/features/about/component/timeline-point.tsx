import type { Transition } from "motion";

import { motion } from "motion/react";

const transition: Transition = {
  duration: 1.6,
  ease: "easeInOut",
  repeat: Infinity,
  times: [0, 0.5, 1],
};

const styles = getComputedStyle(document.documentElement);
const border300 = styles.getPropertyValue("--neutral-300");
const border800 = styles.getPropertyValue("--neutral-800");

export type TimelinePointProps = {
  isPulsing?: boolean;
};

export const TimelinePoint = ({ isPulsing = false }: TimelinePointProps) => {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="relative flex h-8 w-8 items-center justify-center">
        <motion.div
          animate={
            isPulsing
              ? {
                  borderColor: [border300, border800, border300],
                  scale: [1, 1.3, 1],
                }
              : undefined
          }
          className="absolute h-8 w-8 rounded-full border-2 border-dashed border-neutral-200"
          transition={transition}
        />
        <motion.div
          animate={
            isPulsing
              ? {
                  backgroundColor: border800,
                  scale: [1, 1.2, 1],
                }
              : undefined
          }
          className="absolute h-4 w-4 rounded-full bg-neutral-300"
          transition={transition}
        />
      </div>
      <div className="grow border-l-2 border-dashed border-neutral-200"></div>
    </div>
  );
};
