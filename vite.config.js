import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:
    process.env.NODE_ENV === "production"
      ? "/FS-1-Exp3/"   // for GitHub Pages
      : "/",            // for local + Netlify dev
});
