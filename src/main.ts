import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import './styles/element.scss';

const app = createApp(App);

app.use(ElementPlus);
app.mount('#app');
