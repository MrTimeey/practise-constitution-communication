import { createRouter, createWebHistory } from 'vue-router';
import PlayerView from '@/views/PlayerView.vue';
import CoachView from '@/views/CoachView.vue';
import { useUserStore } from '@/stores/user';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: () => {
                const userStore = useUserStore();
                if (userStore.isPlayer) {
                    return 'player';
                } else if (userStore.isCoach) {
                    return 'coach';
                }
                return 'not-authenticated';
            },
        },
        {
            path: '/player',
            name: 'player',
            component: PlayerView,
            beforeEnter: () => useUserStore().isPlayer,
        },
        {
            path: '/coach',
            name: 'coach',
            component: CoachView,
            beforeEnter: () => useUserStore().isCoach,
        },
        {
            path: '/not-authenticated',
            name: 'not-authenticated',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/NotAuthenticated.vue'),
        },
    ],
});

export default router;
