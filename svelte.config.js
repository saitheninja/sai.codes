import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),

    vite: {
      resolve: {
        alias: {
          $lib: path.resolve("./src/lib"),
          $routes: path.resolve("./src/routes"),
        },
      },
    },
  },
};

export default config;
