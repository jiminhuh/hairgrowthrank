import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://hairgrowthrank.vercel.app",
  build: { format: "directory" },
});
