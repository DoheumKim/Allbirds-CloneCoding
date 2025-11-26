import { Router } from "express";
import {
  getAllProducts,
  syncProductsFromClient,
  addReview,
  getReviews,
} from "../controllers/productController.js";

const router = Router();

// 상품 목록 조회
// GET /api/products
router.get("/", getAllProducts);

// 상품 동기화
// POST /api/products/sync-from-client
router.post("/sync-from-client", syncProductsFromClient);

// 특정 상품 리뷰 목록 조회
// GET /api/products/:id/reviews
router.get("/:id/reviews", getReviews);

// 특정 상품에 리뷰 등록
// POST /api/products/:id/reviews
router.post("/:id/reviews", addReview);

export default router;
