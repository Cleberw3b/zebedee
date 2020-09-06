let isTest = false
let isProd = false
let isDev = false

/**
 * Verifies which environment we are working with
 */
switch (process.env.NODE_ENV)
{
  case 'test':
    isTest = true
    break
  case 'production':
    isProd = true
    break
  default:
    isDev = true
}

export const IS_DEVELOPMENT_ENV = isDev

export const IS_PRODUCTION_ENV = isProd

export const IS_TEST_ENV = isTest

export const ZEBEDEE_API_KEY = process.env.ZEBEDEE_API_KEY

export const ZEBEDEE_URL = 'https://api.zebedee.io'
