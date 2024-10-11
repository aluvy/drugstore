import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/main',
	},
	{
		path: '/main',
		name: 'MainPage',
		component: () => import('@/views/MainPage.vue'),
		meta: { auth: true, title: 'main page' },
	},
	{
		path: '/list',
		name: 'ListPage',
		component: () => import('@/views/ListPage.vue'),
		meta: { auth: true, title: 'list page' },
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: () => import('@/views/NotFound.vue'),
		meta: { auth: true, title: 'not found' },
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
