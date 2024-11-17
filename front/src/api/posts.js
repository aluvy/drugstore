// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { post } from './index.js';

// 학습노트 목록 조회 API
function fetchPosts() {
	return post.get();
}

// 학습노트 추가 API
function addPost(postData) {
	return post.post('', postData);
}

// 특정 학습노트 조회 API
function fetchPost(_id) {
	return post.get(_id);
}

// 학습노트 수정 API
function editPost(_id, postData) {
	return post.put(_id, postData);
}

// 학습노트 삭제 API
function deletePost(_id) {
	return post.delete(_id);
}

export { fetchPosts, addPost, fetchPost, editPost, deletePost };
