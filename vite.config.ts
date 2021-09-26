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
  // 是否开启生产mock
  const prodMock = false

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
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: ``
      })
    ],
    // 别名
    resolve: {
      alias: [
        // @/xxxx => src/xxxx
        {
          find: /@\//,
          replacement: pathResolve('src') + '/'
        },
        // #/xxxx => types/xxxx
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
        '/api/mock': {
          target: 'http://localhost:9527/', // 对mock进行代理，为了区别非mock的代理
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/api': {
          target: 'https://abcsv-cs.net/',
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
