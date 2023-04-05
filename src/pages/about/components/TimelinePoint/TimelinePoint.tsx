import { Transition, motion } from "framer-motion";

import theme from "../../../../config/theme";

interface Props {
  isPulsing?: boolean;
}

const transition: Transition = {
  duration: 1.6,
  ease: "easeInOut",
  times: [0, 0.5, 1],
  repeat: Infinity,
};

const TimelinePoint = ({ isPulsing = false }: Props) => {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="relative flex h-8 w-8 items-center justify-center">
        <motion.div
          animate={
            isPulsing
              ? {
                  borderColor: [
                    theme.colors.neutral[300],
                    theme.colors.neutral[800],
                    theme.colors.neutral[300],
                  ],
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
                  backgroundColor: theme.colors.neutral[800],
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

export default TimelinePoint;
