import Vue from 'vue';
import Router from 'vue-router';
import Top from './views/Top.vue';
import Addition from './views/Addition.vue';
import Test from './views/Test.vue';
import List from './views/List.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {path: '/', component: Top},
        {path: '/addition', component: Addition},
        {path: '/test', component: Test},
        {path: '/list', component: List},
    ],
});