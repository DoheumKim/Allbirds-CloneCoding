# Allbirds Clone Coding Project

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

이 프로젝트는 친환경 신발 브랜드 **Allbirds** 웹사이트를 학습 목적으로 클론 코딩한 프로젝트입니다.
React 프론트엔드와 Express/MongoDB 백엔드를 기반으로 쇼핑몰의 핵심 기능(상품 조회, 장바구니, 주문, 관리자 기능 등)을 구현했습니다.

## Tech Stack

### Frontend
* **Core:** React, Vite
* **State Management:** Context API
* **Networking:** Axios
* **Styling:** CSS / Styled-components

### Backend
* **Runtime:** Node.js
* **Framework:** Express
* **Database:** MongoDB, Mongoose
* **Authentication:** bcryptjs, express-session, connect-mongo (Session store)
* **Security:** CORS

---

## Getting Started (설치 및 실행)

### 1. Prerequisites (사전 준비)
* [Node.js](https://nodejs.org/) 설치
* [MongoDB](https://www.mongodb.com/) 서비스 실행
* API 테스트를 위한 [Postman](https://www.postman.com/downloads/) (선택 사항)

### 2. Backend Setup
터미널에서 `backend` 폴더로 이동 후 의존성을 설치하고 서버를 실행합니다.

```bash
cd backend

# 필수 패키지 설치
npm install express cors mongoose express-session cookie-parser bcryptjs connect-mongo

# 서버 실행 (기본 포트: 4000)
npm start
```

### 3. Frontend Setup
새 터미널을 열고 `frontend` 폴더로 이동 후 의존성을 설치하고 클라이언트를 실행합니다.

```bash
cd frontend

# 필수 패키지 설치
npm install axios
npm install

# 클라이언트 실행 (Vite Development Server)
npm run dev
```

## API Documentation

백엔드 서버 주소: `http://localhost:4000`

### Users (회원)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/users/register` | 회원가입 |
| `POST` | `/api/users/login` | 로그인 |
| `GET` | `/api/users/me` | 내 정보 조회 (로그인 필요) |

### Products (상품)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products` | 전체 상품 목록 조회 |
| `GET` | `/api/products?query...` | 상품 검색/필터/정렬 (상세 옵션 하단 참조) |
| `POST` | `/api/products/sync-from-client` | 프론트엔드 데이터 동기화 |

**검색/필터 쿼리 예시:**
`GET /api/products?sort={sortOption}&category={category}&size={size}&minPrice={min}&maxPrice={max}&q={keyword}`
* `sort`: `recommend` (추천순), `latest` (최신순), `priceAsc` (낮은가격순), `priceDesc` (높은가격순), `review` (리뷰많은순)

### Cart (장바구니)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/cart` | 장바구니 조회 |
| `POST` | `/api/cart` | 장바구니에 상품 추가 |
| `PATCH` | `/api/cart` | 장바구니 수량 수정 |
| `DELETE` | `/api/cart/item` | 특정 상품 삭제 |
| `DELETE` | `/api/cart` | 장바구니 비우기 |

### Reviews (리뷰)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products/:id/reviews` | 특정 상품 리뷰 목록 조회 |
| `POST` | `/api/products/:id/reviews` | 상품 리뷰 등록 |

### Orders (주문)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/orders` | 주문 생성 |
| `GET` | `/api/orders/my` | 내 주문 내역 조회 |

### Admin (관리자)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/admin/products` | 상품 등록 |
| `PATCH` | `/api/admin/products/:id` | 상품 정보 수정 |
| `PATCH` | `/api/admin/products/:id/discount` | 할인 정책 변경 |
| `GET` | `/api/admin/sales` | 판매 현황 조회 (`?from=YYYY-MM-DD&to=YYYY-MM-DD`) |

## Database Schema Info

### Product Options
* **Size (mm):** 250 ~ 320 (5단위)
* **Material:**
    * 가볍고 시원한 tree
    * 면
    * 부드럽고 따뜻한 wool
    * 캔버스
    * 플라스틱 제로 식물성 가죽
* **Category:** 라이프스타일, 슬립온

## Team & Roles

| Name | Role | Responsibilities | GitHub |
| :--- | :--- | :--- | :--- |
| **Doheum Kim** | **Backend Lead**<br>& Frontend | • **Backend:** 전체 시스템 아키텍처 및 API 설계/구현 (100%)<br>• **Frontend:** 마이페이지(My Page) | [Link](https://github.com/DoheumKim) |
| **Seoin Jung** | Frontend Dev | • 프론트엔드 핵심 로직 및 UI/UX 공동 개발 | [Link](https://github.com/tim9985) |
| **Wookdong Kim** | Frontend Dev | • 프론트엔드 핵심 로직 및 UI/UX 공동 개발 | [Link](https://github.com/...) |

## License & Copyright

Copyright 2025 The Allbirds-CloneCoding Team

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

### Disclaimer
> **Note:** This project is for **educational purposes only**. All brand images, logos, and design concepts belong to **Allbirds, Inc.** and are **NOT** covered by this open-source license.
