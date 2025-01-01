import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Esports League Nepal',
          description: 'Join Esports League Nepal for thrilling gaming tournaments and events. Connect with Nepal\'s esports community and showcase your competitive gaming skills.',
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 3000,
    host: '0.0.0.0', // Allow external devices to access
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`,
      },
    },
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
