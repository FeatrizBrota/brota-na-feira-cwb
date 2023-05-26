import { createApp } from 'vue'
import App from './App.vue'
import roteador from './router'
import 'bulma/css/bulma.css'

import '@fortawesome/fontawesome-free/css/all.css'


createApp(App)
    .use(roteador)
    .mount('#app')
