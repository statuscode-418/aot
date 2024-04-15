import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react({
    include: ['**/react/*'],
    experimentalReactChildren: true
  }), tailwind({ config: './tailwind.config.mjs' })]
});
