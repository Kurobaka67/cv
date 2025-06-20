import Aura from '@primeuix/themes/aura';
import Button from 'primevue/button';
import Card from 'primevue/card';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import Panel from 'primevue/panel';
import Tag from 'primevue/tag';
import ToastService from 'primevue/toastservice';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/styles.scss';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});
app.component('Card', Card);
app.component('Button', Button);
app.component('Panel', Panel);
app.component('Tag', Tag);
app.use(ToastService);
app.use(ConfirmationService);

app.mount('#app');

