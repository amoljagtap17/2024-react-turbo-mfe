import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/index.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom"],
  /* banner: {
    js: "'use client'",
  }, */
  ...options,
}));
