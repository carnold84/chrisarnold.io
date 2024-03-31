import { useState } from "react";

import ABCImage from "./assets/abc-news.svg";
import BBCImage from "./assets/bbc-news.svg";
import ESPNFCImage from "./assets/espn-fc.png";
import NBAImage from "./assets/nba.svg";
import RNZImage from "./assets/rnz.svg";
import GuardianImage from "./assets/the-guardian.webp";

interface Favourite {
  bgColor: string;
  id: string;
  imageUrl: string;
  title: string;
  url: string;
}

const Dashboard = () => {
  const [favourites, setFavourites] = useState<{ [id: string]: Favourite }>({
    favourites_1: {
      bgColor: "#D24141",
      id: "favourites_1",
      imageUrl: RNZImage,
      title: "RNZ News",
      url: "https://www.rnz.co.nz/news",
    },
    favourites_2: {
      bgColor: "#052962",
      id: "favourites_2",
      imageUrl: GuardianImage,
      title: "The Guardian",
      url: "https://www.theguardian.com",
    },
    favourites_3: {
      bgColor: "#ffffff",
      id: "favourites_3",
      imageUrl: BBCImage,
      title: "BBC News",
      url: "https://www.bbc.com/news",
    },
    favourites_4: {
      bgColor: "#000000",
      id: "favourites_4",
      imageUrl: ABCImage,
      title: "ABC News",
      url: "https://www.abc.net.au/news",
    },
    favourites_5: {
      bgColor: "#000000",
      id: "favourites_5",
      imageUrl: NBAImage,
      title: "NBA - ESPN",
      url: "https://www.espn.com/nba/",
    },
    favourites_6: {
      bgColor: "#ffffff",
      id: "favourites_6",
      imageUrl: ESPNFCImage,
      title: "ESPN FC",
      url: "https://www.espn.co.uk/football/",
    },
  });

  return (
    <div className="min-h-screen p-5 md:p-10">
      <div className="flex flex-col gap-5">
        <h1 className="font-display text-h5 text-text-400">Favourites</h1>
        <div className="grid grid-cols-3 gap-5 xs:grid-cols-4 sm:grid-cols-5 md:flex">
          {Object.values(favourites).map(
            ({ bgColor, id, imageUrl, title, url }) => {
              return (
                <a
                  className="flex flex-col items-center gap-1 overflow-hidden"
                  href={url}
                  key={id}
                >
                  <div
                    className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg border-2 border-neutral-100 p-2"
                    style={{ backgroundColor: bgColor }}
                  >
                    <img
                      alt=""
                      className="h-full w-full object-contain"
                      src={imageUrl}
                    />
                  </div>
                  <span className="w-full overflow-hidden overflow-ellipsis text-nowrap text-center font-display text-sm text-text-400">
                    {title}
                  </span>
                </a>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
