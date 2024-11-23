import Vuex from 'vuex';
import { saveAuthToCookie, saveUserToCookie, getAuthFromCookie, getUserFromCookie, deleteCookie } from '@/utils/cookies.js';
import { loginUser } from '@/api/user.js';
import { fetchBookmarks, addBookmark, deleteBookmark } from '@/api/bookmarks.js';
import { fetchProducts } from '@/api/products.js';

export default new Vuex.Store({
	state: {
		title: '온라인 의약품 정보 검색 서비스', // site title

		modalShow: false,
		asideShow: false,

		username: getUserFromCookie() || '',
		nickname: '',
		token: getAuthFromCookie() || '',

		pageNo: 1,
		numOfRows: 10, // 한 페이지 결과 수 (고정값)
		totalCount: null,

		products: [],
		productsDetail: {},

		bookmarks: [],
		isBookmarks: [],
	},
	getters: {
		getToken: state => state.token,
		isLogin: state => state.username !== '',
	},
	mutations: {
		// modal, aside settings
		setModalShow(state, payload) {
			state.modalShow = payload;
			this.commit('setHTMLScroll', payload);
		},
		setAsideShow(state, payload) {
			state.asideShow = payload;
			this.commit('setHTMLScroll', payload);
		},
		setHTMLScroll(state, payload) {
			if (payload) {
				document.querySelector('html').classList.add('scrollRock');
			} else {
				document.querySelector('html').classList.remove('scrollRock');
			}
		},

		// user login
		setUserinfo(state, payload) {
			state.username = payload.user.username;
			state.nickname = payload.user.nickname;
		},
		setToken(state, payload) {
			state.token = payload.token;
		},

		// user logout
		clearUserinfo(state) {
			state.username = '';
			state.nickname = '';
		},
		clearToken(state) {
			state.token = '';
		},

		// product
		setProducts(state, payload) {
			const bookMarksItemName = [];
			if (this.state.bookmarks) {
				this.state.bookmarks.forEach(item => {
					bookMarksItemName.push(item.itemName);
				});
			}

			const items = [...payload.products].map(item => {
				// default image 추가
				if (item.itemImage == null) item.itemImage = '/public/no-image.png';

				// bookmark 추가
				item.bookmark = bookMarksItemName.includes(item.itemName);

				return item;
			});

			state.products = items;
		},
		setProductsDetail(state, payload) {
			state.productsDetail = payload;
		},

		// page
		setPageNo(state, payload) {
			state.pageNo = payload;
		},
		setTotalCount(state, payload) {
			state.totalCount = payload;
		},

		// bookmark
		setBookMarks(state, payload) {
			state.bookmarks = payload;
		},
		setIsBookMarks(state, payload) {
			state.isBookmarks = payload;
		},
	},
	actions: {
		// login
		async LOGIN(context, payload) {
			// 로그인 정보: test, 1111
			const res = await loginUser(payload.userData);

			context.commit('setUserinfo', { user: res.data.user });
			context.commit('setToken', { token: res.data.token });
			saveAuthToCookie(res.data.token);
			saveUserToCookie(res.data.user.username);

			return res.data.success;
		},
		async LOGOUT() {
			this.commit('clearUserinfo');
			this.commit('clearToken');
			deleteCookie('drug_auth');
			deleteCookie('drug_user');
		},

		// products
		async FETCH_PRODUCTS(context, payload) {
			try {
				const res = await fetchProducts(payload);

				let { items, pageNo, numOfRows, totalCount } = res.data.data;

				// store에 products 등록
				this.commit('setProducts', { products: items });

				// update PageNo
				this.commit('setPageNo', pageNo);

				// update totalCount
				totalCount = Math.ceil(totalCount / numOfRows);
				this.commit('setTotalCount', totalCount);
			} catch (e) {
				// console.log('FETCH_PRODUCTS', e);
				this.commit('setProducts', { products: [] });
				this.commit('setPageNo', 1);
				this.commit('setTotalCount', 1);
			}
		},

		// BOOKMARK
		async FETCH_BOOKMARKS() {
			try {
				const res = await fetchBookmarks();
				this.commit('setBookMarks', res.data.bookmarks);
			} catch (e) {
				// console.log('FETCH_BOOKMARKS', e);
				this.commit('setBookMarks', []);
			}
		},
		async ADD_BOOKMARKS(context, payload) {
			try {
				await addBookmark(payload);
				this.dispatch('FETCH_BOOKMARKS'); // bookmark 업데이트
			} catch (e) {
				// console.log('ADD_BOOKMARKS', e);
			}
		},
		async DELETE_BOOKMARKS(context, payload) {
			try {
				await deleteBookmark(payload.itemSeq);
				this.dispatch('FETCH_BOOKMARKS'); // bookmark 업데이트
			} catch (e) {
				// console.log('DELETE_BOOKMARKS', e);
			}
		},
	},
});
