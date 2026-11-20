import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { Plugin } from "vite";
import { parse } from "yaml";

import { site } from "../src/content/site.ts";
import { experienceData } from "../src/features/about/content/experience.ts";

type Project = {
  demoLink: string;
  description: string;
  order: number;
  repositoryLink: string;
  tags: string;
  title: string;
};

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

function readProjects(dir: string): Project[] {
  return readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => {
      const match = FRONTMATTER.exec(readFileSync(join(dir, file), "utf8"));
      if (!match) throw new Error(`No frontmatter in ${join(dir, file)}`);
      return {
        ...(parse(match[1]) as Omit<Project, "description">),
        description: match[2].trim().replace(/\s+/g, " "),
      };
    })
    .sort((a, b) => a.order - b.order);
}

function buildLlmsTxt(root: string, email: string | undefined) {
  const experience = [...experienceData].reverse().map((item) => {
    const title = item.subTitle ? `${item.title} ${item.subTitle}` : item.title;
    return `- ${title}, ${item.employer} (${item.duration})`;
  });

  const projects = readProjects(join(root, "src/features/code/content")).map(
    (p) => {
      return `- [${p.title}](${p.demoLink}): ${p.description} Stack: ${p.tags}. [Source](${p.repositoryLink})`;
    },
  );

  const contact = [
    `- [Website](${site.url})`,
    `- [GitHub](${site.github})`,
    ...(email ? [`- [Email](mailto:${email})`] : []),
  ];

  return [
    `# ${site.name}`,
    `> ${site.description}`,
    "## Experience",
    experience.join("\n"),
    "## Projects",
    projects.join("\n"),
    "## Contact",
    contact.join("\n"),
  ]
    .join("\n\n")
    .concat("\n");
}

/** Injects the meta description into index.html and generates /llms.txt. */
export function siteFiles(): Plugin {
  let root = process.cwd();
  let email: string | undefined;

  return {
    configResolved(config) {
      root = config.root;
      email = config.env.VITE_CONTACT_EMAIL;
    },
    configureServer(server) {
      server.middlewares.use("/llms.txt", (_req, res) => {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        res.end(buildLlmsTxt(root, email));
      });
    },
    generateBundle() {
      this.emitFile({
        fileName: "llms.txt",
        source: buildLlmsTxt(root, email),
        type: "asset",
      });
    },
    name: "site-files",
    transformIndexHtml() {
      return [
        {
          attrs: { content: site.description, name: "description" },
          injectTo: "head",
          tag: "meta",
        },
      ];
    },
  };
}
