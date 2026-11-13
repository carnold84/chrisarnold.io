import { motion } from "motion/react";
import { createRef, useEffect, useState } from "react";

import { ExperienceItem } from "./component/experience-item";
import { TimelinePoint } from "./component/timeline-point";
import { experienceData } from "./content/experience";

const email = import.meta.env.VITE_CONTACT_EMAIL;
const experience = experienceData.reverse().map((exp, index) => ({
  experience: exp,
  index,
  ref: createRef<HTMLDivElement>(),
}));

export const AboutView = () => {
  const [visibleExperienceIds, setVisibleExperienceIds] = useState<string[]>(
    [],
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      setVisibleExperienceIds((prev) => {
        const nextVisibleExperienceIds = [...prev];
        entries.forEach(({ isIntersecting, target }) => {
          const id = target.getAttribute("id");

          if (id) {
            if (isIntersecting && !nextVisibleExperienceIds.includes(id)) {
              nextVisibleExperienceIds.push(id);
            } else if (!isIntersecting) {
              const index = nextVisibleExperienceIds.indexOf(id);
              if (index > -1) {
                nextVisibleExperienceIds.splice(index, 1);
              }
            }
          }
        });
        return nextVisibleExperienceIds;
      });
    }, options);

    experience.forEach(({ ref }) => {
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
      <div className="flex h-[75vh] w-full items-center justify-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-center font-display text-h1 font-medium text-text-500 lowercase md:text-[100px] xl:text-[140px]">
            Hello.
          </h1>
          <h2 className="text-h6 pl-1 text-center font-display text-text-500 md:text-h5 md:leading-9">
            I'm a front-end developer and designer who likes to write clean,
            elegant, functional code and partner it with clean, beautiful
            design, and well thought out, user-friendly interfaces.
          </h2>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-6xl">
          <div className="h-48">
            <TimelinePoint isPulsing={true} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-display text-h3 font-medium text-text-500 lowercase sm:text-h2 md:text-h1">
              Experience.
            </h2>
            <div className="h-20 border-l-2 border-dashed border-neutral-200"></div>
          </div>
          <div>
            {experience.map(({ experience, index, ref }) => {
              return (
                <ExperienceItem
                  experience={experience}
                  index={index}
                  isVisible={visibleExperienceIds.includes(experience.id)}
                  key={experience.id}
                  ref={ref}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="mb-40 w-full max-w-6xl">
          <div className="flex flex-col items-center justify-center">
            <div className="h-40 border-l-2 border-dashed border-neutral-200"></div>
            <h2 className="font-display text-h3 font-medium text-text-500 lowercase sm:text-h2 md:text-h1">
              Say Hello
            </h2>
            <div className="mb-2 h-10 border-l-2 border-dashed border-neutral-200 sm:h-20"></div>
            <a
              className="text-h5 text-text-300 sm:text-h4"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
