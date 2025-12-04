import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getMyOrders } from "@/api/userAPI";

const Wrapper = styled.div`
  background-color: #f2f2f2;
  padding: 20px 18px 28px;
`;

const TitleBar = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EmptyText = styled.p`
  font-size: 14px;
  padding: 16px 0;
  color: #555;
`;

// 회색 카드 하나
const ItemCard = styled.div`
  background-color: #b7b3b3;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
`;

const RightCol = styled.div`
  text-align: right;
  font-size: 13px;
  line-height: 1.7;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const ProductInfo = styled.div`
  font-size: 13px;
  line-height: 1.7;

  a {
    color: #0044aa;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const ReviewButton = styled.button`
  margin-top: 4px;
  padding: 6px 18px;
  border: none;
  background-color: #4a7fbf;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
`;

function formatDate(dateStr) {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  const y = d.getFullYear();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export const MyOrders = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getMyOrders();
        console.log("getMyOrders response:", res);

        // 백엔드 응답 형태를 최대한 유연하게 처리
        const raw =
          res.orders ??
          res.data?.orders ??
          res.data ??
          res;

        const list = Array.isArray(raw)
          ? raw
          : Array.isArray(raw?.items)
          ? raw.items
          : [];

        setItems(list);
      } catch (e) {
        console.error("getMyOrders error:", e);
      }
    };

    fetchOrders();
  }, []);

  const handleReviewClick = (item) => {
    // productId 추출 (백엔드 구조에 맞게 여러 후보 지원)
    const productId =
      item.productId ||
      item.product?._id ||
      item.product?._id?.toString?.();

    if (!productId) {
      alert("상품 정보를 찾을 수 없어 후기 작성 페이지로 이동할 수 없습니다.");
      return;
    }

    // 상품 상세 페이지로 이동 → 거기서 리뷰 작성 가능하도록 연결
    navigate(`/products/${productId}#review`);
  };

  if (!items.length) {
    return (
      <Wrapper>
        <TitleBar>지난 주문 내역</TitleBar>
        <EmptyText>지난 주문 내역이 없습니다.</EmptyText>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <TitleBar>지난 주문 내역</TitleBar>
      <List>
        {items.map((item) => {
          // 각 필드 추출 (여러 키 이름 지원)
          const name =
            item.productName ||
            item.product?.name ||
            item.name ||
            "알 수 없는 상품";

          const quantity =
            item.quantity ??
            item.qty ??
            item.count ??
            1;

          const totalPrice =
            item.totalPrice ??
            item.paymentAmount ??
            item.price ??
            (item.product?.price && quantity
              ? item.product.price * quantity
              : 0);

          const paidAt =
            item.paidAt ??
            item.paymentDate ??
            item.createdAt ??
            item.orderDate;

          return (
            <ItemCard key={item._id || `${name}-${paidAt}-${Math.random()}`}>
              <LeftCol>
                <ProductInfo>
                  <div>
                    제품명:{" "}
                    <a href="#">
                      {name}
                    </a>
                  </div>
                  <div>
                    결제금액:{" "}
                    {totalPrice != null
                      ? `${totalPrice.toLocaleString()}원`
                      : "-"}
                  </div>
                </ProductInfo>

                <ReviewButton
                  type="button"
                  onClick={() => handleReviewClick(item)}
                >
                  후기작성
                </ReviewButton>
              </LeftCol>

              <RightCol>
                <div>수량: {quantity}개</div>
                <div>결제일: {formatDate(paidAt)}</div>
              </RightCol>
            </ItemCard>
          );
        })}
      </List>
    </Wrapper>
  );
};
