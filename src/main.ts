import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import ElementPlus from 'element-plus';
import './styles/element.scss';
import router from './router';
import registerGlobalComponents from './components';
import registerGlobalDirective from './directive';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
const pinia = createPinia();
registerGlobalComponents(app);
registerGlobalDirective(app);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');
