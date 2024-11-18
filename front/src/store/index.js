import Vuex from 'vuex';
import { saveAuthToCookie, saveUserToCookie, getAuthFromCookie, getUserFromCookie } from '@/utils/cookies.js';
import { loginUser } from '@/api/user.js';

export default new Vuex.Store({
	state: {
		title: '온라인 의약품 정보 검색 서비스', // site title
		loading: false,
		pageTit: '',
		username: getUserFromCookie() || '',
		nickname: '',
		token: getAuthFromCookie() || '',

		pageNo: 1,
		numOfRows: 10, // 한 페이지 결과 수 (고정값)
		totalCount: null,
		products: [],

		productsDetail: {},
	},
	getters: {
		getTitle: state => state.title,
		isLoading: state => state.loading,
		getPagetit: state => state.pageTit,
		getUsername: state => state.username,
		getNickname: state => state.nickname,
		getToken: state => state.token,
		isLogin: state => state.username !== '',

		getPageNo: state => state.pageNo,
		getNumOfRows: state => state.numOfRows,
		getTotalCount: state => state.totalCount,
		getProducts: state => state.products,

		getProductsDetail: state => state.productsDetail,
	},
	mutations: {
		setLoading(state, payload) {
			// console.log('setLoading', payload);
			state.loading = payload.loading;
		},
		setPagetit(state, payload) {
			state.pageTit = payload.pageTit;
		},
		setUserinfo(state, payload) {
			state.username = payload.user.username;
			state.nickname = payload.user.nickname;
		},
		setToken(state, payload) {
			state.token = payload.token;
		},
		clearUserinfo(state) {
			state.username = '';
			state.nickname = '';
		},
		clearToken(state) {
			state.token = '';
		},

		// product
		setProducts(state, payload) {
			state.products = payload.products;
		},
		setProductsDetail(state, payload) {
			console.log('setProductsDetail', payload);
			state.productsDetail = payload;
		},

		// page
		setPageNo(state, payload) {
			state.pageNo = payload;
		},
		setTotalCount(state, payload) {
			state.totalCount = payload;
		},
	},
	actions: {
		async LOGIN(context, payload) {
			console.log('LOGIN', payload);
			// test, 1111
			const res = await loginUser(payload.userData);

			context.commit('setUserinfo', { user: res.data.user });
			context.commit('setToken', { token: res.data.token });
			saveAuthToCookie(res.data.token);
			saveUserToCookie(res.data.user.username);

			return res;
		},
	},
});
