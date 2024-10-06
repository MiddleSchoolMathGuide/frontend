import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [".."],
    },
  },
  define: {
    /* Remove this if you want the `code` plugin to work */
    __ENABLE_CARTA_SSR_HIGHLIGHTER__: false,
  },
});
