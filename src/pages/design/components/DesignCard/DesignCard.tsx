import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

interface Props {
  number: number;
  thumbnail: string;
  title: string;
  to: string;
}

const DesignCard = ({ number, thumbnail, title, to }: Props) => {
  return (
    <Link
      className="project-link group w-full overflow-hidden outline-none"
      to={to}
    >
      <motion.img
        className="mb-3 h-64 w-full origin-center border border-neutral-100 object-cover object-top transition-all ease-linear will-change-transform xs:h-56 md:h-60"
        src={thumbnail}
        style={{
          transformStyle: "preserve-3d",
        }}
        transition={{
          default: { duration: 0.1, ease: "linear" },
          scale: { duration: 3, ease: "linear" },
        }}
      />
      <div className="flex gap-3">
        <h3 className="font-display text-h3 font-normal text-text-200">
          {number}.
        </h3>
        <h2 className="font-display text-h3 font-normal text-text-500">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default DesignCard;
