import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Index from '@/views/index.vue';

const routes: RouteRecordRaw[] = [
     {
          path: '/',
          name: 'index',
          component: Index,
          meta: { title: 'Shadcn/Vue - Landing template' },
     },
     {
          path: '/:pathMatch(.*)*',
          redirect: '/',
     },
];

const router = createRouter({
     history: createWebHistory('/'),
     routes,
});

router.beforeEach((to, from, next) => {
     document.title = <string>to.meta.title;
     next();
});

export default router;
