import Vue from 'vue';
import Router from 'vue-router';
import Top from './views/Top.vue';
import ForMember from './views/ForMember.vue';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {path: '/', component: Top},
        {path: '/member', component: ForMember},
    ],
});