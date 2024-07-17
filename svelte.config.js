import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: "../public/pages/",
      assets: "../public/generated/",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    appDir: "assets",
    paths: {
      relative: false,
    },
  },
};

export default config;
