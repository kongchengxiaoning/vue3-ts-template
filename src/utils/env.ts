/**
 * @description: Get system variables
 */
export function getAppEnvConfig(): ViteEnv {
  const ENV = import.meta.env as unknown as ViteEnv

  return ENV
}

/**
 * @description: Development mode
 */
export const devMode = 'development'

/**
 * @description: Production mode
 */
export const prodMode = 'production'

/**
 * @description: Get environment variables
 */
export function getEnv(): string {
  return import.meta.env.MODE
}

/**
 * @description: Is it a development mode
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV
}

/**
 * @description: Is it a production mode
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD
}
