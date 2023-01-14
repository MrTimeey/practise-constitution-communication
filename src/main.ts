import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import KeycloakService from '@/security/KeycloakService';

const app = createApp(App);
app.use(createPinia());

const renderApp = () => {
    app.use(router);
    app.mount('#app');
};

KeycloakService.login(renderApp);
