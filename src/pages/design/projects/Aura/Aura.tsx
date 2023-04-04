import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Aura = () => {
  return (
    <div className="flex h-full w-full justify-center pt-20">
      <div className="flex w-full max-w-7xl flex-col items-start gap-3 xl:flex-row xl:gap-10">
        <div className="flex flex-col items-start">
          <MotionLink
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            className="m-0 text-h5 text-text-300"
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            exit={{
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
              transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            to="/design"
          >
            design.
          </MotionLink>
          <motion.h1
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            className="font-500 mb-3 flex font-display text-h1 font-medium text-text-500"
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            exit={{
              clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
              transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
          >
            Aura
          </motion.h1>
          <div>
            <p className="text-body text-text-400">
              Aura is a concept for design management software that allows
              designers to save images, links, notes, and designs for their
              projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aura;
