import react from "@vitejs/plugin-react";
import { defineConfig, splitVendorChunkPlugin } from "vite";
import vitePluginMdToHTML from "vite-plugin-md-to-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginMdToHTML(), splitVendorChunkPlugin()],
  server: {
    port: 3000,
  },
});
