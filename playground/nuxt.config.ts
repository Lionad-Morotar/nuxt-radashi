export default defineNuxtConfig({
  modules: ['../src/module'],
  radashi: {
    prefix: '_',
    prefixSkip: ['string'],
    upperAfterPrefix: true,
    alias: [
      ['snake', 'stringToSnake'], // => stringToCamelCase
    ]
  }
})
