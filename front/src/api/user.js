// 회원 프로필(로그인, 회원가입 등)과 관련 된 API 함수 파일
import { user } from './index.js';

// 회원가입 API
function registerUser(userData) {
	return user.post('/signup', userData); // promise return
}

// 로그인 API
function loginUser(userData) {
	return user.post('/login', userData); // promise return
}

export { registerUser, loginUser };
