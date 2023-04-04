import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Apollo = () => {
  return (
    <motion.div
      animate={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: { duration: 0.7, ease: "easeOut" },
      }}
      className="flex h-full w-full justify-center pt-20"
      initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
      exit={{
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        transition: { duration: 0.7, ease: "easeIn" },
      }}
    >
      <div className="flex w-full max-w-7xl flex-col gap-3 xl:flex-row xl:gap-10">
        <div>
          <Link className="m-0 text-h5 text-text-300" to="/design">
            design.
          </Link>
          <h1 className="font-500 mb-3 font-display text-h1 font-medium text-text-500">
            Apollo
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Apollo;
