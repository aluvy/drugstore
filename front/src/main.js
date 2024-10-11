import '@/assets/css/style.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/routes/index.js';
import store from '@/store/index.js';

// createApp(App).use(router).use(store).mount('#app');

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
