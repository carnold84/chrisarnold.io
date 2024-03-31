import { motion } from "framer-motion";
import { useState } from "react";

interface Favourite {
  id: string;
  title: string;
  url: string;
}

const Dashboard = () => {
  const [favourites, setFavourites] = useState<{ [id: string]: Favourite }>({
    favourites_1: {
      id: "favourites_1",
      title: "RNZ News",
      url: "https://www.rnz.co.nz/news",
    },
  });

  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
        y: 0,
      }}
      className="flex h-full w-full flex-col items-center"
      initial={{ opacity: 0, y: -100 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: "easeIn" },
        y: -100,
      }}
    >
      <div>
        {Object.values(favourites).map(({ id, title, url }, i) => {
          return (
            <div key={id}>
              <a href={url}>{title}</a>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Dashboard;
