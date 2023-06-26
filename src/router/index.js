import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import UserPage from '../views/UserPage.vue';
import FeiraPage from '../views/FeiraPage.vue';

const routes = [
    {
        path: '/:tag?',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/user',
        name: 'UserPage',
        component: UserPage
    },
    {
        path: '/feira',
        name: 'FeiraPage',
        component: FeiraPage
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;
