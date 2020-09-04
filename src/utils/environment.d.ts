//
//     Global interfaces
//

/**
 * Rewrite Interface `global.NodeJS.ProcessEnv`
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'test' | 'production'
      ZEBEDEE_API_KEY: string
    }
  }
}

// convert it into a module by adding an empty export statement.
export { }
