import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import { configSvgIconsPlugin } from './svgSprite'
import { configMockPlugin } from './mock'
import { configCompressPlugin } from './compress'
import { configHtmlPlugin } from './html'
import { configVisualizerConfig } from './visualizer'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_LEGACY, VITE_USE_MOCK, VITE_BUILD_COMPRESS } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    // support name
    vueSetupExtend()
  ]

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig())

  // The following plugins only work in the production environment
  if (isBuild) {
    // vite-plugin-compression
    vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS))
  }

  return vitePlugins
}
