# Allbirds Clone Coding Project

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

이 프로젝트는 친환경 신발 브랜드 **Allbirds** 웹사이트를 학습 목적으로 클론 코딩한 프로젝트입니다.
React 프론트엔드와 Express/MongoDB 백엔드를 기반으로 쇼핑몰의 핵심 기능(상품 조회, 장바구니, 주문, 관리자 기능 등)을 구현했습니다.

## 🛠 Tech Stack

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
# 또는 개발 모드
npm run dev
