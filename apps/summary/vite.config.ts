import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "summary",
      filename: "remoteEntry.js",
      exposes: {
        "./Dashboard": "./src/components/sections/dashboard/Dashboard",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "@repo/query",
        "@repo/ui",
        "@repo/chart",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    host: "localhost",
    port: 3002,
    strictPort: true,
    open: false,
  },
  preview: {
    host: "localhost",
    port: 3002,
    strictPort: true,
    open: false,
  },
});
