import { motion } from "framer-motion";
import { ReactNode } from "react";

//import styled from "styled-components";

interface Props {
  children: ReactNode;
}

/* const Container = styled(motion.div)`
  -webkit-backface-visibility: hidden;
  columns: 1;
  column-gap: 20px;
  width: 100%;

  @media (min-width: 460px) {
    columns: 2;
  }

  @media (min-width: 800px) {
    columns: 3;
  }

  @media (min-width: 1000px) {
    columns: 4;
  }

  @media (min-width: 1250px) {
    columns: 5;
  }
`; */

const AnimatedGrid = ({ children, ...rest }: Props) => {
  return (
    <motion.div
      animate="enter"
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
      exit="exit"
      initial="initial"
      variants={{
        enter: { transition: { staggerChildren: 0.2 } },
        exit: { transition: { staggerChildren: 0.2 } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedGrid;
