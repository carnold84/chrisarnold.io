import type { Transition, Variants } from "motion";

import { motion } from "motion/react";

import { Link } from "../router";
import { Picture } from "./picture";

const transition: Transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variants: Variants = {
  enter: { opacity: 1, scale: 1, transition },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition,
  },
  initial: { opacity: 0, scale: 0.9 },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 1.1 },
};

interface Props {
  alt?: string;
  height?: number;
  imageUrl: string;
  subTitle?: string;
  title?: string;
  to: string;
  width?: number;
}

export const Image = ({ alt, height, imageUrl, subTitle, title, to, width }: Props) => {
  return (
    <motion.div className="image backface-hidden" variants={variants}>
      <Link
        className="relative inline-flex w-full cursor-pointer flex-col pb-5 no-underline"
        to={to}
      >
        <motion.div
          className="relative w-full overflow-hidden border border-neutral-100 backface-hidden"
          transition={transition}
          variants={frameVariants}
          whileHover={"hover"}
        >
          <motion.div
            className="relative w-full backface-hidden"
            variants={imageVariants}
            transition={transition}
          >
            <Picture alt={alt} height={height} url={imageUrl} width={width} />
          </motion.div>
        </motion.div>
        <motion.h3
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: {
              delay: 0.5,
              duration: 2,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          }}
          className="text-h5 text-text-500 mb-2"
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          exit={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            transition: {
              duration: 2,
              ease: [0.43, 0.13, 0.23, 0.96],
            },
          }}
        >
          {title}
        </motion.h3>
        {subTitle && (
          <motion.p
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              transition: { duration: 1, ease: "easeOut" },
            }}
            className="text-body text-text-400 mt-1"
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            exit={{
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
              transition: { duration: 1, ease: "easeIn" },
            }}
          >
            {subTitle}
          </motion.p>
        )}
      </Link>
    </motion.div>
  );
};
