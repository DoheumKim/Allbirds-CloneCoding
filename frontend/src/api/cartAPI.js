import api from "./axiosInstance";

// 장바구니 조회
export async function getCart() {
  const res = await api.get("/cart");
  return res.data;
}

// 장바구니 담기
export async function createToCart(productId, size, quantity = 1) {
  const res = await api.post("/cart", { productId, size, quantity });
  return res.data;
}

// 장바구니 수량 변경
export async function patchCartItem(productId, size, quantity) {
  const res = await api.patch("/cart", { productId, size, quantity });
  return res.data;
}

// 장바구니 아이템 삭제
export async function deleteCartItem(productId, size) {
  // DELETE 요청은 body를 data 속성에 담아야 함
  const res = await api.delete("/cart/item", { 
    data: { productId, size } 
  });
  return res.data;
}

// 주문 생성 (장바구니 -> 주문)
export async function createOrder() {
  const res = await api.post("/orders");
  return res.data;
}