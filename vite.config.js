import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithm: "brotliCompress", ext: ".br" }), // Brotli compression
    compression({ algorithm: "gzip", ext: ".gz" }), // Gzip compression
  ],
  optimizeDeps: {
    include: ["framer-motion", "lenis"], // Ensure these are properly bundled
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true, // Fixes issues with ESM modules
    },
  },
  base: "/Stallon/",
});
