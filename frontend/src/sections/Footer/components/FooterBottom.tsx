export const FooterBottom = () => {
  return (
    <div className="box-border caret-transparent max-w-[1440px] mx-auto pt-[55px] pb-0 px-0 md:pt-[46px] md:pb-[99px] md:px-[77px]">
      <div className="box-border caret-transparent gap-x-[17px] grid grid-cols-none gap-y-[17px] md:gap-x-0 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-0">
        <div className="items-start box-border caret-transparent gap-x-[5px] flex flex-col leading-[18px] gap-y-[5px] md:items-end md:gap-x-1 md:flex-row md:gap-y-1">
          <div className="box-border caret-transparent">
            © 2025 EFG.COAll Rights Reserved.
          </div>
          <div className="box-border caret-transparent">
            <a
              href="/pages/terms-of-use_240920"
              className="box-border caret-transparent underline"
            >
              이용 약관
            </a>
            , 
            <a
              href="/pages/privacy-policy-24-07"
              className="box-border caret-transparent underline"
            >
              개인정보 처리방침
            </a>
            , 
          </div>
        </div>
        <div className="box-border caret-transparent leading-[17px] max-w-[219px] md:max-w-none">
          <p className="box-border caret-transparent">
            (주)이에프쥐 대표 박제우 ㅣ 서울특별시 강남구 강남대로 160길 45
            <br className="box-border caret-transparent" />
            통신판매업신고번호 2023-서울강남-04461 ㅣ 등록번호 146-81-03205
            <br className="box-border caret-transparent" />
            전화번호 070-4138-0128(수신자 부담)ㅣ E-mail{" "}
            <a
              href="mailto://help@efg.earth"
              className="box-border caret-transparent underline"
            >
              help@efg.earth
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
