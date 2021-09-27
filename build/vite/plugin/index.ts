import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { configSvgIconsPlugin } from './svgSprite'
import { configMockPlugin } from './mock'
import { configCompressPlugin } from './compress'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_LEGACY,
    VITE_USE_MOCK,
    VITE_BUILD_COMPRESS
  } = viteEnv

  const vitePlugins: (Plugin | Plugin[])[] = [
    vue(),
    vueJsx()
  ]

  // @vitejs/plugin-legacy
  VITE_LEGACY && isBuild && vitePlugins.push(legacy())

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  // vite-plugin-mock
  VITE_USE_MOCK && vitePlugins.push(configMockPlugin(isBuild))

  // The following plugins only work in the production environment
  if (isBuild) {
    // vite-plugin-compression
    vitePlugins.push(
      configCompressPlugin(VITE_BUILD_COMPRESS)
    )
  }

  return vitePlugins
}
