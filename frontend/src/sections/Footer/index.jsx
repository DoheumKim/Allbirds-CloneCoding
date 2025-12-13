// frontend\src\sections\Footer\index.jsx
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { FooterFeatures } from "@/sections/Footer/components/FooterFeatures";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";

const FooterContainer = styled.footer`
  box-sizing: border-box;
  caret-color: transparent;
`;

const Spacer = styled.div`
  box-sizing: border-box;
  caret-color: transparent;
`;

const SpacerSection = styled.section`
  box-sizing: border-box;
  caret-color: transparent;
  height: 1.75rem;

  @media (min-width: 768px) {
    height: 2.5rem;
  }
`;

export const Footer = () => {
  const { pathname } = useLocation();

  // /products/*int(상품 상세 페이지)에서만 
  const isProductDetailPage = /^\/products\/\d+$/.test(pathname);

  return (
    <FooterContainer>
      {/* 상품 상세(/products/*)에서는 이미지 3개 숨김*/}
      {!isProductDetailPage && <FooterFeatures />}

      <Spacer>
        <SpacerSection />
      </Spacer>
      <FooterLinks />
    </FooterContainer>
  );
};