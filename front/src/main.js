import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/routes/index.js';
import store from '@/store/index.js';

import '@mdi/font/css/materialdesignicons.css';
import { loadFonts } from './plugins/webfontloader';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import '@/assets/css/style.css';

const vuetify = createVuetify({
	components,
	directives,
});

loadFonts();

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.mount('#app');
