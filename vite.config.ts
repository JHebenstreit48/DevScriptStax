import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./dist/bundle-report.html",
      open: true,
      gzipSize: true,
      brotliSize: true
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@pages": resolve(__dirname, "src/Pages"),
      "@components": resolve(__dirname, "src/Components"),
      "@routes": resolve(__dirname, "src/routes"),
      "@scss": resolve(__dirname, "src/SCSS"),
      "@navFull": resolve(__dirname, "src/Components/Navigation/IndividualNav/FullTopics"),
      "@navGranular": resolve(__dirname, "src/Components/Navigation/IndividualNav/Granularized"),
      "@routeFull": resolve(__dirname, "src/routes/IndividualRoutes/FullRoutes"),
      "@routeGranular": resolve(__dirname, "src/routes/IndividualRoutes/Granularized")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          markdown: ["react-markdown", "remark-gfm", "rehype-raw", "rehype-slug", "rehype-autolink-headings"],
          prism: ["react-syntax-highlighter"]
        }
      }
    }
  }
});
