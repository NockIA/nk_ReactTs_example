import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' 
      },
    },
  },
  plugins: [react()],
});
