import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia';

import { Router } from '@/routes';

import 'vue-loading-overlay/dist/css/index.css';

import './style.css'
import App from './App.vue'

const app = createApp(App);

app.use(createPinia());
app.use(Router);


app.component(
    'LoadingOverlay',
    defineAsyncComponent(() => import('vue-loading-overlay')),
);

Router.isReady().then(() => {
    app.mount('#app');
});
