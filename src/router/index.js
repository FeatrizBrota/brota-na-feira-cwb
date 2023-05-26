import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import UserPage from '../views/UserPage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/user',
        name: 'UserPage',
        component: UserPage
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;
