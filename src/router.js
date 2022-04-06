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
        {path: '/cocktail-maker/', component: Top},
        {path: '/cocktail-maker/addition', component: Addition},
        {path: '/cocktail-maker/test', component: Test},
        {path: '/cocktail-maker/list', component: List},
    ],
});