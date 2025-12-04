// src/pages/mypage/MyPageLayout.jsx
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { getMe } from "@/api/userAPI";
import { MyOverview } from "./MyOverview";
import { MyInfo } from "./MyInfo";
import { MyOrders } from "./MyOrders.jsx";
import { OrderInfoForm } from "./OrderInfoForm";
import { AllMembersBenefits } from "./AllMembersBenefits";

const PageWrapper = styled.div`
  background-color: #f5f5f5;
`;

const Hero = styled.div`
  width: 100%;
  height: 220px;
  background-image: url("/img/mypage-hero.jpg"); /* 임시 이미지 경로 */
  background-size: cover;
  background-position: center;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 16px 80px;
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  column-gap: 80px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`;

const SideNav = styled.nav`
  font-family: "Pretendard", sans-serif;
  font-size: 16px;
`;

const SideTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const SideLink = styled(NavLink)`
  display: block;
  margin-bottom: 12px;
  color: #111;
  text-decoration: none;

  &.active {
    text-decoration: underline;
    font-weight: 600;
  }
`;

const LogoutLink = styled.button`
  margin-top: 24px;
  padding: 0;
  border: none;
  background: none;
  color: #111;
  font-size: 14px;
  cursor: pointer;
`;

const MainArea = styled.section``;

const MainTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const MyPageLayout = () => {
  const navigate = useNavigate();

  // 마이페이지 진입 시 로그인 체크
  useEffect(() => {
    const check = async () => {
      try {
        await getMe();
      } catch {
        navigate("/account/login");
      }
    };
    check();
  }, [navigate]);

  const handleLogout = () => {
    // TODO: logoutUser API가 있다면 여기에서 호출
    navigate("/account/login");
  };

  return (
    <PageWrapper>
      <Hero />

      <ContentWrapper>
        <SideNav>
          <SideLink end to="">
            마이페이지
          </SideLink>
          <SideLink to="info">회원 정보</SideLink>
          <SideLink to="orders">지난 주문 내역</SideLink>
          <SideLink to="order-form">주문 정보 등록</SideLink>
          <SideLink to="benefits">올멤버스 혜택</SideLink>

          <LogoutLink onClick={handleLogout}>로그아웃</LogoutLink>
        </SideNav>

        <MainArea>
          <Routes>
            <Route
              index
              element={
                <>
                  <MainTitle>마이페이지</MainTitle>
                  <MyOverview />
                </>
              }
            />
            <Route
              path="info"
              element={
                <>
                  <MainTitle>회원 정보</MainTitle>
                  <MyInfo />
                </>
              }
            />
            <Route
              path="orders"
              element={
                <>
                  <MainTitle>지난 주문 내역</MainTitle>
                  <MyOrders />
                </>
              }
            />
            <Route
              path="order-form"
              element={
                <>
                  <MainTitle>주문 정보 등록</MainTitle>
                  <OrderInfoForm />
                </>
              }
            />
            <Route
              path="benefits"
              element={
                <>
                  <MainTitle>올멤버스 혜택</MainTitle>
                  <AllMembersBenefits />
                </>
              }
            />
          </Routes>
        </MainArea>
      </ContentWrapper>
    </PageWrapper>
  );
};
