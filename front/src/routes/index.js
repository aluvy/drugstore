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
	// {
	// 	path: '/list',
	// 	name: 'ListPage',
	// 	component: () => import('@/views/ListPage.vue'),
	// 	meta: { auth: true, title: 'list page' },
	// },
	{
		path: '/login',
		name: 'loginPage',
		component: () => import('@/views/LoginPage.vue'),
		meta: { auth: true, title: 'login page' },
	},
	{
		path: '/join',
		name: 'joinPage',
		component: () => import('@/views/JoinPage.vue'),
		meta: { auth: true, title: 'join page' },
	},
	{
		path: '/pw',
		name: 'pwPage',
		component: () => import('@/views/PwPage.vue'),
		meta: { auth: true, title: 'pw page' },
	},
	{
		path: '/mypage',
		name: 'myPage',
		component: () => import('@/views/MyPage.vue'),
		meta: { auth: true, title: 'my page' },
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
