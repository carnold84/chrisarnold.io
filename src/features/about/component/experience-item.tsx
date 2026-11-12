import type { Variants } from "motion";

import { clsx } from "clsx";
import { motion } from "motion/react";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import type { Experience } from "../about.types";

import { TimelinePoint } from "./timeline-point";

export type ExperienceItemProps = ComponentPropsWithoutRef<"div"> & {
  experience: Experience;
  index: number;
  isVisible: boolean;
};

export const ExperienceItem = forwardRef<HTMLDivElement, ExperienceItemProps>(
  ({ experience: { duration, employer, id, subTitle, title }, index, isVisible, ...rest }, ref) => {
    const isOdd = index % 2 === 0;
    const transformOrigin = isOdd ? "top right" : "top left";

    const variants: Variants = {
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
    };

    return (
      <div
        className={clsx("flex w-full", {
          "justify-end": !isOdd,
          "justify-start": isOdd,
        })}
        id={id}
        key={id}
        {...rest}
        ref={ref}
      >
        <div className={"flex w-1/2"} style={{ width: "calc(50% + 16px)" }}>
          {!isOdd && (
            <div className="mr-5">
              <TimelinePoint />
            </div>
          )}
          <div
            className={clsx("flex grow flex-col", {
              "items-end text-right": isOdd,
              "items-start text-left": !isOdd,
            })}
          >
            <motion.div
              animate={isVisible ? "visible" : "hidden"}
              custom={0}
              initial="initial"
              style={{ transformOrigin }}
              variants={variants}
            >
              <p className="mt-0 mb-1 font-display text-sm text-text-200 sm:text-h5">{duration}</p>
            </motion.div>
            <motion.div
              animate={isVisible ? "visible" : "hidden"}
              custom={1}
              initial="initial"
              style={{ transformOrigin }}
              variants={variants}
            >
              <h3 className="mb-1 font-display text-body text-text-500 lowercase sm:text-h4">
                {title}
              </h3>
            </motion.div>
            {subTitle && (
              <motion.div
                animate={isVisible ? "visible" : "hidden"}
                custom={1.5}
                initial="initial"
                style={{ transformOrigin }}
                variants={variants}
              >
                <h3 className="mb-2 font-display text-body text-text-500 lowercase sm:text-h5">
                  {subTitle}
                </h3>
              </motion.div>
            )}
            <motion.div
              animate={isVisible ? "visible" : "hidden"}
              custom={2}
              initial="initial"
              style={{ transformOrigin }}
              variants={variants}
            >
              <h4 className="mb-10 font-display text-sm text-text-300 lowercase sm:mb-20 sm:text-h5">
                {employer}
              </h4>
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
