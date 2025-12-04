import api from './axiosInstance';

// ==========================================================
// 상품 조회 관련 (GET) -> 200 OK
// ==========================================================

/**
 * 상품 목록 조회
 * @param {Object} params - 쿼리 파라미터
 * @param {string} params.sort - 정렬 (recommend, latest, priceAsc, priceDesc, review)
 * @param {string} params.category - 카테고리 필터
 * @param {string} params.size - 사이즈 필터
 * @param {string} params.minPrice - 최소 가격
 * @param {string} params.maxPrice - 최대 가격
 * @param {string} params.q - 검색어
 * @returns {Promise} 상품 목록
 */
export const getProducts = async (params = {}) => {
  try {
    const response = await api.get('/products', { params });
    return response.data;
  } catch (error) {
    console.error('상품 목록 조회 실패:', error);
    throw error;
  }
};

/**
 * 상품 상세 조회
 * @param {number|string} productId - 상품 ID
 * @returns {Promise} 상품 상세 정보
 */
export const getProduct = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('상품 상세 조회 실패:', error);
    throw error;
  }
};

/**
 * 상품 리뷰 목록 조회
 * @param {number|string} productId - 상품 ID
 * @returns {Promise} 리뷰 목록
 */
export const getProductReviews = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}/reviews`);
    return response.data;
  } catch (error) {
    console.error('리뷰 목록 조회 실패:', error);
    throw error;
  }
};

// ==========================================================
// 상품 생성 및 수정 관련 (POST) -> 201 created
// ==========================================================

/**
 * 상품 리뷰 작성
 * @param {number|string} productId - 상품 ID
 * @param {Object} reviewData - 리뷰 데이터 { rating, comment }
 * @returns {Promise} 작성된 리뷰
 */
export const createProductReview = async (productId, reviewData) => {
  try {
    const response = await api.post(`/products/${productId}/reviews`, reviewData);
    return response.data;
  } catch (error) {
    console.error('리뷰 작성 실패:', error);
    throw error;
  }
};

/**
 * 프론트 데이터 동기화용 (기존 파일 내용 추가)
 * @param {Array} products - 동기화할 상품 목록
 */
export const createProductSync = async (products) => {
  try {
    const response = await api.post("/products/sync-from-client", products);
    return response.data;
  } catch (error) {
    console.error('상품 동기화 실패:', error);
    throw error;
  }
};

// ==========================================================
// 호환성 별칭 (Alias)
// ==========================================================
export const getProductById = getProduct;
// export const fetchProducts = getProducts;  기존파일에서 삭제된 이름, 기존 파일에서 쓴 적이 없어서 없어도 됨
// export const fetchProductDetail = getProduct;
// export const fetchReviews = getProductReviews;
export const createReview = createProductReview;
export const addProductReview = createProductReview; // 기존 이름 호환용
export const syncProductsFromClient = createProductSync; // 기존 이름 호환용