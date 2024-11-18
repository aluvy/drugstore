import { products } from './index.js';

// 약품리스트
function fetchProducts(params) {
	let url = '';
	for (const [key, value] of Object.entries(params)) {
		url += `&${key}=${value}`;
	}
	return products.get(`/products?${url}`); // promise return
}

export { fetchProducts };
