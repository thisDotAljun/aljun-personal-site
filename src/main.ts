import './assets/tailwind/index.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'
import { ConfirmationService, KeyFilter, Ripple, ToastService, Tooltip } from 'primevue'

const DefaultPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: '#222222',
          inverseColor: '#ffffff',
          hoverColor: '#111827',
          activeColor: '#eeeeee',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: DefaultPreset,
    options: {
      darkModeSelector: false,
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
})
app.use(ConfirmationService)
app.use(ToastService)

app.directive('tooltip', Tooltip)
app.directive('ripple', Ripple)
app.directive('keyfilter', KeyFilter)

app.mount('#app')
