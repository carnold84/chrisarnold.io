import { motion } from "framer-motion";

import CodeItem from "./components/CodeItem";

const modules: any = import.meta.glob("../../content/code/*.md", {
  eager: true,
});
const mdFiles: any[] = [];

for (const path in modules) {
  mdFiles.push(modules[path]);
}

mdFiles.sort((a, b) => {
  return a.attributes.order - b.attributes.order;
});

const Code = () => {
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
        <h1 className="font-500 mb-3 text-center font-display text-h2 font-medium lowercase text-text-500 sm:text-h1">
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

export default Code;
