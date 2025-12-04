# Base URL: http://localhost:4000
모든 요청 중 Body가 있는 요청은 Content-Type: application/json 필요
로그인이 필요한 요청은 fetch/axios에서 credentials: "include" 또는 withCredentials: true 필요

## 사용자 API
### 회원가입
POST /api/users/register

Body:
{
  "loginName": "아이디",
  "password": "비밀번호",
  "displayName": "표시 이름"
}
<!-- 비밀번호 8자리 이상 -->

### 로그인
POST /api/users/login

Body:
{
  "loginName": "아이디",
  "password": "비밀번호"
}

### 내 정보 조회
GET /api/users/me
(로그인 필수)

## 상품 API
### 상품 목록 조회
GET /api/products

### 상품 목록 (정렬/검색/필터)
GET /api/products?sort={}&category=&size=&minPrice=&maxPrice=&q=

Query 파라미터:
sort: recommend | latest | priceAsc | priceDesc | review
category: 카테고리명(라이프스타일, 슬립온) - 중복가능
size: 240~300 숫자
minPrice: 최소 가격
maxPrice: 최대 가격
q: 검색어 (상품명/설명 부분일치)

### 상품 리뷰 목록 조회
GET /api/products/:id/reviews

### 상품 리뷰 등록
(로그인 필수), 한 상품당 리뷰 최대 3개 제한
POST /api/products/:id/reviews

Body:
{
  "rating": 5,
  "comment": "리뷰 내용"
}

### 상품 동기화 (프론트 -> 백엔드)
POST /api/products/sync-from-client

Body (상품 배열):
[
  {
    "_id": 1,              // 선택
    "name": "상품명",
    "description": "설명",
    "originalPrice": 89000,
    "discountRate": 0.1,
    "sizes": [250,260],
    "materials": ["mesh","rubber"],
    "categories": ["슬립온"]
  }
]

## 장바구니 API
(로그인 필수)

### 장바구니 조회
GET /api/cart

### 장바구니 추가
POST /api/cart

Body:
{
  "productId": 6,
  "size": 270,
  "quantity": 2
}

### 장바구니 수정 (수량 변경)
PATCH /api/cart

Body:
{
  "productId": 6,
  "size": 270,
  "quantity": 3
}

### 장바구니 상품 제거
DELETE /api/cart/item

Body:
{
  "productId": 6,
  "size": 270
}

### 장바구니 비우기
DELETE /api/cart

## 주문 API
(로그인 필수)
### 주문 생성 (장바구니 -> 주문)
POST /api/orders

User.cart 기준으로 주문 생성됨

### 단일 상품 주문(선택 기능)
POST /api/orders/my

Body:
{
  "productId": 6,
  "size": 270,
  "quantity": 2
}

### 내 주문 내역
GET /api/orders/my

## 관리자(Admin) API
(role: "admin" 로그인 필수)
### 상품 등록
POST /api/admin/products

Body:
{
  "name": "상품명",
  "description": "설명",
  "originalPrice": 120000,
  "discountRate": 0.1,
  "sizes": [250,260],
  "materials": ["leather"],
  "categories": ["슬립온"]
}

### 상품 수정
PATCH /api/admin/products/:id

Body:
{
  "name": "수정명",
  "originalPrice": 130000,
  "discountRate": 0.2,
  "sizes": [260,270],
  "materials": ["mesh","rubber"],
  "categories": ["슬립온"]
}

### 할인 정책 변경
PATCH /api/admin/products/:id/discount

Body:
{
  "discountRate": 0.25,
  "saleStartDate": "2025-11-01",
  "saleEndDate": "2025-11-15"
}

### 판매 현황 조회
GET /api/admin/sales?from=YYYY-MM-DD&to=YYYY-MM-DD

예:
GET /api/admin/sales?from=2025-11-01&to=2025-11-30