import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    include: ['**/react/*'],
    experimentalReactChildren: true
  }), tailwind({
    config: './tailwind.config.mjs'
  }), vue()],
  output: "server",
  adapter: vercel({
   imageService: true, 
  }),
});
