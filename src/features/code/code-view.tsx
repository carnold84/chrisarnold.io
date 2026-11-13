import { motion } from "motion/react";

import { CodeItem } from "./components/code-item";

type MarkdownFile = {
  attributes: {
    demoLink: string;
    order: number;
    path: string;
    repositoryLink: string;
    tags: string;
    title: string;
    type: string;
  };
  html: string;
};

const modules = import.meta.glob<MarkdownFile>("./content/*.md", {
  eager: true,
});
const mdFiles = Object.values(modules).sort(
  (a, b) => a.attributes.order - b.attributes.order,
);

export const CodeView = () => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        transition: { duration: 0.7, ease: "easeOut" },
        y: 0,
      }}
      className="flex h-full w-full justify-center pt-20 sm:pt-32"
      initial={{ opacity: 0, y: -100 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.7, ease: "easeIn" },
        y: -100,
      }}
    >
      <div className="flex w-full max-w-3xl flex-col gap-3 lg:max-w-4xl xl:max-w-7xl">
        <h1 className="font-500 mb-3 text-center font-display text-h2 font-medium text-text-500 lowercase sm:text-h1">
          Code.
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:mt-5 xl:grid-cols-3">
          {mdFiles.map(({ attributes, html }, i) => {
            return (
              <CodeItem
                content={html}
                demoLink={attributes.demoLink}
                key={attributes.path}
                number={i + 1}
                repositoryLink={attributes.repositoryLink}
                title={attributes.title}
                tags={attributes.tags}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
