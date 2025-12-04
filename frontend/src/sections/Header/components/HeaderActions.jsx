import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getMe } from "@/api/userAPI"; // 로그인 여부 확인용 API

const ActionsWrapper = styled.div`
  box-sizing: border-box;
  caret-color: transparent;
  column-gap: 1rem;
  display: none;
  justify-content: end;
  row-gap: 1rem;
  padding-right: 0;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const ActionLink = styled.a`
  align-items: center;
  box-sizing: border-box;
  caret-color: transparent;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  width: 1.5rem;
  position: relative;
`;

const ActionIcon = styled.img`
  box-sizing: border-box;
  caret-color: transparent;
  height: 26px;
  width: 26px;
`;

const CartIcon = styled.img`
  box-sizing: border-box;
  caret-color: transparent;
  height: 23px;
  width: 22px;
`;

const CartBadge = styled.div`
  box-sizing: border-box;
  caret-color: transparent;

  &::after {
    accent-color: auto;
    align-items: center;
    background-color: black;
    box-sizing: border-box;
    caret-color: transparent;
    color: white;
    display: flex;
    font-size: 8px;
    font-style: normal;
    font-variant-numeric: normal;
    font-weight: 500;
    height: 15px;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1.75rem;
    list-style-position: outside;
    list-style-type: disc;
    pointer-events: auto;
    position: absolute;
    text-align: start;
    text-indent: 0;
    text-transform: none;
    transform: translate(7.5px, -7.5px);
    visibility: visible;
    width: 15px;
    z-index: 10;
    border-radius: 50%;
    right: 3px;
    top: 18px;
    font-family: Pretendard, sans-serif;
  }
`;

export const HeaderActions = () => {
  const navigate = useNavigate();

  // 사람 아이콘 클릭 -> getMe 호출해서 로그인 상태 판별
  const handleAccountClick = async (event) => {
    event.preventDefault(); // 기본 a 이동 막기

    try {
      await getMe();
      navigate("/mypage");    // 성공 -> 로그인 상태
    } catch (error) {
      navigate("/account/login");   // 실패 -> 비로그인 상태
    }
  };

  return (
    <ActionsWrapper>

      <ActionLink href="/search">
        <ActionIcon src="/img/icon-6.svg" alt="Search" />
      </ActionLink>

      <ActionLink href="/account/login" onClick={handleAccountClick}>
        <ActionIcon src="/img/icon-7.svg" alt="Account" />
      </ActionLink>

      <ActionLink>
        <CartIcon src="/img/icon-8.svg" alt="Cart" />
        <CartBadge />
      </ActionLink>
    </ActionsWrapper>
  );
};
