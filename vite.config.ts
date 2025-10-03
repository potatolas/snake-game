import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib';

  return {
    build: isLib
      ? {
        lib: {
          entry: path.resolve(__dirname, 'src/lib.ts'),
          name: 'SnakeGame',
          fileName: (format) => `snake-game.${format}.js`,
          formats: ['es', 'umd'],
        },
        outDir: 'dist-lib',
        rollupOptions: {
          external: ['vue'],
          output: {
            globals: {
              vue: 'Vue',
            },
          },
          assetFileNames: (assetInfo: any) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'snake-game.css';
            }
            return assetInfo.name || '[name][extname]';
          },
        },
      }
      : {
        outDir: 'dist',
      },
    plugins: [vue(), tailwindcss()],
    resolve: {
      alias: {
        '@snake': path.resolve(__dirname, 'src'),
        // '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
