import loading from './loading/index.vue';
import ring from './ring/index.vue';

export default function registerGlobalComponents(app: any) {
    app.component('loading', loading);
    app.component('ring', ring);
}