import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://syngajewski.com",
  server: {
    host: "0.0.0.0",
    port: 4321
  }
});
