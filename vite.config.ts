import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import { wrapperEnv } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'

import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env)

  const isBuild = command === 'build'

  return {
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/'
        },
        {
          find: /#\//,
          replacement: pathResolve('types') + '/'
        }
      ]
    },

    server: {
      port: 9527,
      proxy: {
        '/api': {
          target: 'http://localhost:9527/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },

    build: {
      target: 'es2015',
      outDir: 'dist',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true
        }
      },
      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 1200
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
						@import "./src/assets/styles/global.scss";
						@import "./src/assets/styles/mixin.scss";
					`
        }
      }
    },

    // The vite is separately extracted and managed
    plugins: createVitePlugins(viteEnv, isBuild)

  }
}
