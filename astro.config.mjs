import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://morgan-storm.com",
  vite: {
    plugins: [tailwindcss()],
  },
});