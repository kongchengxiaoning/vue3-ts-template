import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  // 是否开启mock
  const devMock = true

  return {
    // 插件
    plugins: [
      vue(),
      // 配置svgIcon
      viteSvgIcons({
        // Specify the icon folder to be cached
        iconDirs: [pathResolve('src/assets/icons/svg')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]'
      }),
      // 配置mock
      viteMockServe({
        ignore: /^\_/,
        mockPath: 'mock',
        watchFiles: true,
        localEnabled: command === 'serve' && devMock
      })
    ],
    // 别名
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
    // 开发
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
    // 生产
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
          drop_debugger: true
        }
      },
      brotliSize: false,
      chunkSizeWarningLimit: 1200
    },
    // 全局增加样式
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
						@import "./src/assets/styles/global.scss";
						@import "./src/assets/styles/mixin.scss";
					`
        }
      }
    }
  }
}
