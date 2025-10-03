import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: true
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@snake': path.resolve(__dirname, 'src'),
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
