import type { VNodeChild, PropType as VuePropType } from 'vue'

declare global {
  declare type Nullable<T> = T | null
  declare type NonNullable<T> = T extends null | undefined ? never : T

  declare type PropType<T> = VuePropType<T>
  declare type VueNode = VNodeChild | JSX.Element

  declare type Recordable<T = any> = Record<string, T>
  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T
  }

  interface ImportMetaEnv extends ViteEnv {
    __: unknown
  }

  declare interface ViteEnv {
    VITE_ENV: string
    VITE_LEGACY: boolean
    VITE_USE_MOCK: boolean
    VITE_GLOB_APP_TITLE: string
    VITE_PUBLIC_PATH: string
    VITE_GLOB_API_URL: string
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  }
}
