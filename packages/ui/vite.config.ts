import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ entryRoot: 'src', include: ['src'], exclude: ['node_modules', 'dist', '**/*.stories.ts'] }), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ui-design-system',
      formats: ['es', 'cjs'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
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
      ]
    },
  },
})
