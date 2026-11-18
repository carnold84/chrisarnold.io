import mdx from "@mdx-js/rollup";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        mdExtensions: [".md"],
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    },
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    analyzer(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
