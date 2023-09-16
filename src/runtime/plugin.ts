import { defineNuxtPlugin } from '#app'
import Button from './components/Button.vue'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by mb-nuxt-ui-kit!')
  nuxtApp.vueApp.component('MbButton', Button)
})
