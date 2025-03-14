import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    qiankun("qiankun-react", {
      useDevMode: true,
    }),
  ],
  server: {
    port: 8080,
    cors: true,
    origin: "http://localhost:8080",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  // Fix Vite + qiankun issues
  build: {
    minify: false,
    cssCodeSplit: true,
  },
});
