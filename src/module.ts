import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit'
import { join } from 'path';

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'mb-nuxt-ui-kit',
    configKey: 'mbNuxtUIKit'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  hooks: {
    "components:dirs"(dirs) {
      dirs.push({
        path: join(__dirname, "components"),
        prefix: "Mb",
      });
    },
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})