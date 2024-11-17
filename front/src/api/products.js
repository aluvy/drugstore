import { products } from './index.js';

// 약품리스트
function fetchProducts(params) {
	params = {};
	return products.get('/products', params); // promise return
}

export { fetchProducts };
