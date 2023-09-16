import { defineNuxtPlugin } from '#app'
import Button from './components/Button.vue'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('Plugin injected by my-module!')
  nuxtApp.vueApp.component('MbButton', Button)
})
