import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/observatoire-foncier-reunion/" : "/",
  plugins: [react()],
  server: { port: 5173, open: true },
});
