import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
// import postcss from 'rollup-plugin-postcss'
// import autoprefixer from 'autoprefixer'
// import cssnano from 'cssnano'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // postcss({
    //   plugins: [autoprefixer, cssnano],
    //   extract: false,
    //   inject: true, // CSS를 JS 파일에 주입
    //   modules: true, // CSS 모듈화
    // }),
    // cssInjectedByJsPlugin({ topExecutionPriority: false }),
    libInjectCss(),
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
        implementation: 'sass-embedded',
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
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: [
        {
          format: 'esm',
          dir: 'dist',
          // preserveModules: true,
          // preserveModulesRoot: 'src',
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
