import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import matter from "gray-matter";
import { marked } from "marked";
import { defineConfig, type Plugin } from "vite";
import { analyzer } from "vite-bundle-analyzer";

const markdown = (): Plugin => ({
  name: "markdown",
  async transform(code, id) {
    const isMarkdown = id.endsWith(".md");
    if (!isMarkdown) {
      return;
    }
    const { data, content } = matter(code);
    const html = await marked.parse(content);
    return {
      code: `export const attributes = ${JSON.stringify(data)};
export const html = ${JSON.stringify(html)};`,
      map: null,
    };
  },
});

// oxlint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    markdown(),
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    analyzer(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
