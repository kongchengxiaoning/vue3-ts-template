/**
 *  Vite Plugin for fast creating SVG sprites.
 * https://github.com/anncwb/vite-plugin-svg-icons
 */

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export function configSvgIconsPlugin(isBuild: boolean) {
  const svgIconsPlugin = createSvgIconsPlugin({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
    // Svg compression configuration
    svgoOptions: isBuild,
    // Specify symbolId format
    symbolId: 'icon-[dir]-[name]'
  })
  return svgIconsPlugin
}
