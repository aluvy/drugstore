import axios from 'axios';
import { setInterceptors } from './common/interceptors.js';

// token 값이 필요 없는 API 함수
function createInstance() {
	return axios.create({
		baseURL: import.meta.env.VITE_API_URL,
	});
}
export const user = createInstance();

// token 값이 필요한 API 함수
/**
 * CREATE - posts
 * POST - posts
 * GET - posts {id}
 * DELETE - posts {id}
 */
// function createInstanceAuth(url) {
// 	const instance = axios.create({
// 		baseURL: `${import.meta.env.VITE_API_URL}${url}`,
// 	});
// 	return setInterceptors(instance);
// }
// export const post = createInstanceAuth('/posts');

// token 값이 필요한 API 함수
/**
 * CREATE - posts
 * POST - posts
 * GET - posts {id}
 * DELETE - posts {id}
 */
function createInstanceAuth(url) {
	const instance = axios.create({
		baseURL: `${import.meta.env.VITE_API_URL}${url}`,
	});
	return setInterceptors(instance);
}
export const bookmark = createInstanceAuth('/bookmarks');

// products
function getProducts() {
	return axios.create({
		baseURL: import.meta.env.VITE_API_URL,
	});
}
export const products = getProducts();
