import classNames from "classnames";
import { motion } from "framer-motion";
import { ReactNode, RefObject, forwardRef } from "react";

import TimelinePoint from "../TimelinePoint";

interface ExperienceBase {
  duration: ReactNode;
  employer: ReactNode;
  id: string;
  isVisible: boolean;
  title: ReactNode;
}

export interface Experience extends ExperienceBase {
  ref: RefObject<HTMLDivElement>;
}

interface Props extends ExperienceBase {
  index: number;
}

const ExperienceItem = forwardRef<HTMLDivElement, Props>(
  ({ duration, employer, id, index, isVisible, title }, ref) => {
    const isOdd = index % 2 === 0;
    const transformOrigin = isOdd ? "top right" : "top left";

    const variants = {
      visible: (i: number) => ({
        opacity: 1,
        rotate: 0,
        transition: {
          delay: i * 0.2,
          duration: 0.5,
          ease: "easeOut",
        },
        y: 0,
      }),
      hidden: (i: number) => ({
        opacity: 0,
        rotate: isOdd ? -10 : 10,
        transition: {
          delay: i * 0.2,
          duration: 0.5,
          ease: "easeInOut",
        },
        y: 20,
      }),
      initial: { opacity: 0, y: 20 },
    };

    return (
      <div
        className={classNames("flex w-full", {
          "justify-start": isOdd,
          "justify-end": !isOdd,
        })}
        id={id}
        key={id}
        ref={ref}
      >
        <div className={"flex w-1/2"} style={{ width: "calc(50% + 16px)" }}>
          {!isOdd && (
            <div className="mr-5">
              <TimelinePoint />
            </div>
          )}
          <div
            className={classNames("flex grow flex-col", {
              "items-start text-left": !isOdd,
              "items-end text-right": isOdd,
            })}
          >
            <motion.div
              animate={isVisible ? "visible" : "hidden"}
              custom={0}
              initial="initial"
              style={{ transformOrigin }}
              variants={variants}
            >
              {typeof duration === "string" ? (
                <p className="mb-1 mt-0 text-sm text-text-200 sm:text-h5">
                  {duration}
                </p>
              ) : (
                duration
              )}
            </motion.div>
            <motion.div
              animate={isVisible ? "visible" : "hidden"}
              custom={1}
              initial="initial"
              style={{ transformOrigin }}
              variants={variants}
            >
              {typeof title === "string" ? (
                <h3 className="mb-1 text-body lowercase text-text-500 sm:text-h4">
                  {title}
                </h3>
              ) : (
                title
              )}
            </motion.div>
            <motion.div
              animate={isVisible ? "visible" : "hidden"}
              custom={2}
              initial="initial"
              style={{ transformOrigin }}
              variants={variants}
            >
              {typeof employer === "string" ? (
                <h4 className="mb-10 text-sm lowercase text-text-300 sm:mb-20 sm:text-h5">
                  {employer}
                </h4>
              ) : (
                employer
              )}
            </motion.div>
          </div>
          {isOdd && (
            <div className="ml-5">
              <TimelinePoint />
            </div>
          )}
        </div>
      </div>
    );
  },
);

export default ExperienceItem;
