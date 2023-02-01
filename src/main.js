import { createApp } from 'vue'
import { store } from "./stores"
import App from './App.vue'
import Router from './routes'


createApp(App)
    .use(Router)
    .use(store)
    .mount('#app');
