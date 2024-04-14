import color from './color';
import myLoading from './myLoading';

export default function registerGlobalDirective(app: any) {
    app.directive('color', color);
    app.directive('myLoading', myLoading);
}