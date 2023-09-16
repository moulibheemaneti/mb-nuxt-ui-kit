<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: mb-nuxt-ui-kit
- Description: My new Nuxt module
-->

# MB Nuxt UI Kit

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
- [🏀 Online playground](https://stackblitz.com/github/moulibheemaneti/mb-nuxt-ui-kit?file=playground%2Fapp.vue)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Quick Setup

1. Add `mb-nuxt-ui-kit` dependency to your project

```bash
# Using pnpm
pnpm add -D mb-nuxt-ui-kit

# Using yarn
yarn add --dev mb-nuxt-ui-kit

# Using npm
npm install --save-dev mb-nuxt-ui-kit
```

2. Add `mb-nuxt-ui-kit` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'mb-nuxt-ui-kit'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
yarn install

# Generate type stubs
yarn dev:prepare

# Develop with the playground
yarn dev

# Build the playground
yarn dev:build

# Run ESLint
yarn lint

# Run Vitest
yarn test
yarn test:watch

# Release new version
yarn release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/mb-nuxt-ui-kit/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/mb-nuxt-ui-kit

[npm-downloads-src]: https://img.shields.io/npm/dm/mb-nuxt-ui-kit.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/mb-nuxt-ui-kit

[license-src]: https://img.shields.io/npm/l/mb-nuxt-ui-kit.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/mb-nuxt-ui-kit

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
