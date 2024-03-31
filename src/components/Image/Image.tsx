import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Picture from "../Picture";
import "./Image.styles.css";

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const variants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition,
  },
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

const Image = ({
  alt,
  height,
  imageUrl,
  subTitle,
  title,
  to,
  width,
}: Props) => {
  return (
    <motion.div className="image backface-hidden" variants={variants}>
      <Link
        className="relative inline-flex w-full cursor-pointer flex-col pb-5 no-underline"
        to={to}
      >
        <motion.div
          className="backface-hidden relative w-full overflow-hidden border border-neutral-100"
          transition={transition}
          variants={frameVariants}
          whileHover={"hover"}
        >
          <motion.div
            className="backface-hidden relative w-full"
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
          className="mb-2 text-h5 text-text-500"
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
            className="mt-1 text-body text-text-400"
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

export default Image;
