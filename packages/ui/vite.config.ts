import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import postcss from 'rollup-plugin-postcss'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      exclude: ['node_modules', 'dist', '**/*.stories.ts'],
    }),
    tsconfigPaths(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@': path.resolve(__dirname, 'src/components'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      plugins: [
        postcss({
          extract: true, // CSS를 파일로 분리
          minimize: true, // CSS 파일 최적화
          extensions: ['.scss'], // SCSS 파일 처리
        }),
      ],
      output: [
        {
          format: 'esm',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: ({ name: fileName }) => {
            return `${fileName}.js`
          },
        },
        {
          format: 'cjs',
          dir: 'dist',
          entryFileNames: ({ name: fileName }) => {
            return `${fileName}.cjs`
          },
        },
      ],
    },
  },
})
