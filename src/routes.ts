import { createRouter, createWebHistory } from 'vue-router';
import Facilities from './views/components/AdminFacilities.vue';
import { Home } from "lucide-vue-next";
import HomePage from './views/components/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    // 404 - Keep this at the bottom of the list
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: () => import('./views/components/NotFound.vue'),
    },
];

const routerOptions: any = {
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return { el: to.hash, top: 100, behavior: 'smooth' };
        } else {
            const layoutId = document.getElementById('app');
            if (layoutId) {
                return layoutId.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
};
export const Router = createRouter(routerOptions);