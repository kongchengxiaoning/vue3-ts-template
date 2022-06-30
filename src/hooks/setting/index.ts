import type { GlobConfig } from '#/config'

import { getAppEnvConfig } from '@/utils/env'

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const { VITE_GLOB_APP_TITLE, VITE_GLOB_API_URL } = getAppEnvConfig()

  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL
  }
  return glob as Readonly<GlobConfig>
}
