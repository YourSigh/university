import loading from './loading/index.vue';

export default function registerGlobalComponents(app: any) {
    app.component('loading', loading);
}