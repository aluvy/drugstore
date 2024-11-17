import store from '@/store/index.js';

export function setInterceptors(instance) {
	// Add a request interceptor
	instance.interceptors.request.use(
		function (config) {
			// Do something before request is sent
			config.headers.Authorization = store.getters.getToken;
			return config;
		},
		function (error) {
			// Do something with request error
			return Promise.reject(error);
		}
	);

	return instance;
}
