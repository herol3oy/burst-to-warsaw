// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://herol3oy.github.io",
  base: "burst-to-warsaw",
  integrations: [
    starlight({
      title: "Burst to Warsaw?",
      sidebar: [
        {
          label: "Introduction",
          autogenerate: { directory: "introduction" },
        },
        {
          label: "Education",
          autogenerate: { directory: "education" },
        },
        {
          label: "Culture",
          autogenerate: { directory: "culture" },
        },
        {
          label: "Entertainment",
          autogenerate: { directory: "entertainment" },
        },
        {
          label: "Events",
          autogenerate: { directory: "events" },
        },
      ],
    }),
  ],
});
