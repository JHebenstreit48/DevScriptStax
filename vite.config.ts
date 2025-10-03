import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './dist/bundle-report.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@pages': resolve(__dirname, 'src/Pages'),
      '@components': resolve(__dirname, 'src/Components'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@scss': resolve(__dirname, 'src/SCSS'),
      '@navFull': resolve(__dirname, 'src//Navigation/Individual/FullTopics'),
      '@navGranular': resolve(__dirname, 'src/Navigation/Individual/Granularized'),
      '@routeFull': resolve(__dirname, 'src/routes/Individual/FullRoutes'),
      '@routeGranular': resolve(__dirname, 'src/routes/Individual/Granularized'),
    },
  },

  assetsInclude: ['**/*.md'],

  server: {
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        rewrite: path => path, // preserve full /api path
      },
    },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          markdown: [
            'react-markdown',
            'remark-gfm',
            'rehype-raw',
            'rehype-slug',
            'rehype-autolink-headings',
          ],
          prism: ['react-syntax-highlighter'],
        },
      },
    },
  },

  optimizeDeps: {
    include: [
      'react-syntax-highlighter',
      'react-syntax-highlighter/dist/esm/languages/prism/typescript',
      'react-syntax-highlighter/dist/esm/languages/prism/javascript',
      'react-syntax-highlighter/dist/esm/languages/prism/css',
      'react-syntax-highlighter/dist/esm/languages/prism/bash',
      'react-syntax-highlighter/dist/esm/languages/prism/markup',
      'react-syntax-highlighter/dist/esm/styles/prism/material-light',
    ],
  },
});