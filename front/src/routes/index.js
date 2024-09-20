import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/test',
		name: 'indexPage',
		component: () => import('@/App.vue'),
		meta: { title: 'index' },
	},
];

const router = createRouter({
	history: createMemoryHistory(),
	routes,
});

export default router;
