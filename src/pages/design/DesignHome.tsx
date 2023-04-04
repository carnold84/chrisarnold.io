import { motion } from "framer-motion";
import Image from "../../components/Image";
import AnimatedGrid from "./components/AnimatedGrid/AnimatedGrid";
import DesignCard from "./components/DesignCard/DesignCard";
import AuraThumbnail from "./projects/Aura/assets/thumbnail.jpg";
import ApolloThumbnail from "./projects/Apollo/assets/thumbnail.jpg";

const DesignHome = () => {
  return (
    <div className="flex h-full w-full justify-center">
      <div className="mt-20 flex w-full max-w-7xl flex-col items-center gap-3">
        <motion.h1
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
          className="font-500 mb-3 flex text-center font-display text-h2 font-medium text-text-500"
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          exit={{
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] },
          }}
        >
          design.
        </motion.h1>
        <motion.div
          animate="enter"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          exit="exit"
          initial="initial"
          variants={{
            enter: { transition: { staggerChildren: 0.2 } },
            exit: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <Image
            height={522}
            imageUrl={AuraThumbnail}
            key="aura"
            to="aura"
            title="Aura"
            width={820}
          />
          <Image
            height={340}
            imageUrl={ApolloThumbnail}
            key="apollo"
            to="apollo"
            title="Apollo"
            width={500}
          />
        </motion.div>
        {/* <div className="grid grow grid-cols-1 gap-10 md:gap-8 lg:mt-5 xs:grid-cols-2">
          <DesignCard
            number={1}
            thumbnail={AuraThumbnail}
            title="Aura"
            to="aura"
          />
        </div> */}
      </div>
    </div>
  );
};

export default DesignHome;
