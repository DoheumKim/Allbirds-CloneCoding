import axios from "axios";

const API_BASE_URL = 'http://localhost:4000/api';

const api = axios.create({
  baseURL: API_BASE_URL,  // 백엔드 서버 주소
  withCredentials: true,  // 세션(로그인 정보) 유지 필수
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

/* API 함수명 규칙
1. get: get* (ex: getProduct, getCart) - 200 OK, 단순히 서버의 데이터를 가져오기만 하는 동작 수행
2. post: create* (ex: createProductReview) - 201 created, 서버에 데이터를 만드는 동작 수행
3. patch: patch* (ex: patchCartItem) - patch 그대로
4. delete: delete* (ex: deleteCartItem) - delete 그대로

예외: 회원가입/로그인(registar/login) - 둘 다 Post지만 create를 붙이는 것보다
registarUser, loginUser로 쓰는게 가독성이 좋다고 판단
*/