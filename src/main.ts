import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import './styles/element.scss';
import router from './router';
import registerGlobalComponents from './components';

const app = createApp(App);
registerGlobalComponents(app);

app.use(ElementPlus);
app.use(router);
app.mount('#app');
