import axios from 'axios';
import { createApp } from 'vue'
import VueAxios from 'vue-axios';
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/sass/style.scss';

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app');
