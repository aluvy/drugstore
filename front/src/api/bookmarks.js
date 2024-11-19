// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { bookmark } from './index.js';

// 북마크 목록 조회 API
function fetchBookmarks() {
	return bookmark.get();
}

// 북마크 추가 API
function addBookmark(bookmarkData) {
	return bookmark.post('', bookmarkData);
}

// 북마크 삭제 API
function deleteBookmark(bookmarkId) {
	return bookmark.delete(bookmarkId);
}

// bizrno
// itemSeq --- 이거로 식별 중
// 둘 중 하나로 식별

export { fetchBookmarks, addBookmark, deleteBookmark };
