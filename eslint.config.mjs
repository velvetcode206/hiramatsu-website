// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    vue: true,
    ignores: [
      '.nuxt/**',
      '.output/**',
      'dist/**',
      'node_modules/**',
      'pnpm-lock.yaml',
    ],
    formatters: true,
  }, {
    rules: {
      'node/prefer-global/process': ['off'],
      'object-curly-newline': ['warn', {
        multiline: true,
        minProperties: 3,
      }],
    },
  }),
)
