import type { UserConfig, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons'
import { join, resolve } from 'path'

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
	return {
		// 插件
		plugins: [
			vue(),
			viteSvgIcons({
				// Specify the icon folder to be cached
				iconDirs: [resolve(process.cwd(), 'src/assets/icons/svg')],
				// Specify symbolId format
				symbolId: 'icon-[dir]-[name]',
			})
		],
		// 别名
		resolve: {
			alias: {
				'@': join(__dirname, 'src'),
			},
		},
		// 开发
		server: {
			port: 9527,
			proxy: {
				'/api': {
					target: 'https://abcsv-cs.net',
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
					drop_debugger: true,
				},
			},
			brotliSize: false,
			chunkSizeWarningLimit: 1200,
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
