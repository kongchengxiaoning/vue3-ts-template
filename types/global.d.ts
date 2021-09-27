import type {
  VNodeChild,
  PropType as VuePropType
} from 'vue'

declare global {
  // vue
  declare type PropType<T> = VuePropType<T>;
  declare type VueNode = VNodeChild | JSX.Element;

  declare type Recordable<T = any> = Record<string, T>;
  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };

  declare interface ViteEnv {
    VITE_ENV: string;
    VITE_LEGACY: boolean;
    VITE_USE_MOCK: boolean;
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
  }
}
