import { motion } from "framer-motion";
import { createRef, useEffect, useState } from "react";

import ExperienceItem, { Experience } from "./components/ExperienceItem";
import Timeline from "./components/Timeline";

const About = () => {
  const [experience, setExperience] = useState<{ [id: string]: Experience }>({
    experience_1: {
      duration: "2021 - 2023",
      employer: "Capital Preferences",
      id: "experience_1",
      isVisible: false,
      ref: createRef(),
      title: "Senior Front-end Developer",
    },
    experience_2: {
      duration: "2020 - 2021",
      employer: "Telstra",
      id: "experience_2",
      isVisible: false,
      ref: createRef(),
      title: "UI Engineer (Contract)",
    },
    experience_3: {
      duration: "2016 - 2020",
      employer: "Telstra",
      id: "experience_3",
      isVisible: false,
      ref: createRef(),
      title: "UI Engineer (Permanent)",
    },
    experience_4: {
      duration: "2014 - 2016",
      employer: "Oregan Networks",
      id: "experience_4",
      isVisible: false,
      ref: createRef(),
      title: "UI Developer",
    },
    experience_5: {
      duration: "2011 - 2014",
      employer: "Rare",
      id: "experience_5",
      isVisible: false,
      ref: createRef(),
      title: "Front-end Developer",
    },
    experience_6: {
      duration: "2008 - 2011",
      employer: "Motim",
      id: "experience_6",
      isVisible: false,
      ref: createRef(),
      title: "Interaction Designer",
    },
    experience_7: {
      duration: "2007 - 2008",
      employer: "Hit Lab",
      id: "experience_7",
      isVisible: false,
      ref: createRef(),
      title: "Interaction Designer",
    },
    experience_8: {
      duration: "2004 - 2006",
      employer: (
        <h4 className="text-body lowercase text-text-300 sm:text-h5">
          Christchurch Polytechnic
          <br />
          School of Art & Design
          <br />
          New Zealand
          <br />
        </h4>
      ),
      id: "experience_8",
      isVisible: false,
      ref: createRef(),
      title: (
        <h3 className="mb-1 text-h5 lowercase text-text-500 sm:text-h4">
          Bachelor of Design
          <br />
          <span className="hidden sm:inline">(Visual Communication)</span>
          <span className="inline sm:hidden">(Vis. Comm.)</span>
        </h3>
      ),
    },
  });

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    let observer = new IntersectionObserver((entries) => {
      setExperience((prev) => {
        const nextExperience = { ...prev };
        entries.forEach(({ isIntersecting, target }) => {
          const id = target.getAttribute("id");

          if (id) {
            nextExperience[id] = {
              ...prev[id],
              isVisible: isIntersecting,
            };
          }
        });
        return nextExperience;
      });
    }, options);

    Object.values(experience).forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
      <div className="flex h-[80vh] w-full items-center justify-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-center font-display text-h1 font-medium lowercase text-text-500 md:text-[100px] xl:text-[140px]">
            Hello.
          </h1>
          <h2 className="pl-1 text-center font-display text-h5 text-text-500 md:text-h4">
            I'm a front-end developer and designer who likes to write clean,
            elegant, functional code and partner it with clean, beautiful
            design, and well thought out, user-friendly interfaces.
          </h2>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-6xl">
          <div className="h-32">
            <Timeline />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-display text-h3 font-medium lowercase text-text-500 sm:text-h2 md:text-h1">
              Experience
            </h2>
            <div className="h-20 border-l-2 border-dashed border-neutral-200"></div>
          </div>
          <div>
            {Object.values(experience).map(
              ({ duration, employer, id, isVisible, ref, title }, i) => {
                return (
                  <ExperienceItem
                    duration={duration}
                    employer={employer}
                    id={id}
                    index={i}
                    isVisible={isVisible}
                    key={id}
                    ref={ref}
                    title={title}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="mb-40 w-full max-w-6xl">
          <div className="flex flex-col items-center justify-center">
            <div className="h-40 border-l-2 border-dashed border-neutral-200"></div>
            <h2 className="font-display text-h3 font-medium lowercase text-text-500 sm:text-h2 md:text-h1">
              Say Hello
            </h2>
            <div className="mb-2 h-10 border-l-2 border-dashed border-neutral-200 sm:h-20"></div>
            <a
              className="text-h5 text-text-300 sm:text-h4"
              href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
            >
              {import.meta.env.VITE_CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
