import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://williamsohworuka.github.io",
  base: "/astro-blog",
  integrations: [react()],
});