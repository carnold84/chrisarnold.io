import { motion } from "framer-motion";

interface Props {
  isPulsing?: boolean;
}

const transition = {
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
                  borderColor: ["#626467", "#b0b2b3", "#626467"],
                  scale: [1, 1.2, 1],
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
                  backgroundColor: ["#626467", "#b0b2b3", "#626467"],
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
