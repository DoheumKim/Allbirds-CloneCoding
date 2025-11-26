import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="text-white text-xs bg-neutral-800 box-border caret-transparent leading-4 px-[34px] py-[63px] md:p-0">
        <div className="box-border caret-transparent gap-x-[54px] flex flex-wrap max-w-[1440px] gap-y-[54px] mx-auto p-0 md:gap-x-0 md:flex-nowrap md:gap-y-0 md:pt-[94px] md:pb-[91px] md:px-[77px]">
          <div className="box-border caret-transparent w-full md:w-6/12">
            <ul className="box-border caret-transparent flex flex-col list-none pl-0">
              <a
                href="/pages/consent"
                className="relative text-4xl font-light box-border caret-transparent block leading-[54px] w-fit md:text-5xl md:leading-[72px] hover:underline hover:decoration-[3px]"
              >
                올멤버스 가입하기
              </a>
              <a
                href="/pages/our-stores"
                className="relative text-4xl font-light box-border caret-transparent block leading-[54px] w-fit md:text-5xl md:leading-[72px] hover:underline hover:decoration-[3px]"
              >
                오프라인 매장 찾기
              </a>
              <a
                href="http://pf.kakao.com/_xfxcxhVb"
                className="relative text-4xl font-light box-border caret-transparent block leading-[54px] w-fit md:text-5xl md:leading-[72px] hover:underline hover:decoration-[3px]"
              >
                카카오 채널 추가하기
              </a>
              <a
                href="/pages/our-story"
                className="relative text-4xl font-light box-border caret-transparent block leading-[54px] w-fit md:text-5xl md:leading-[72px] hover:underline hover:decoration-[3px]"
              >
                올버즈 브랜드 스토리
              </a>
            </ul>
          </div>
          <div className="box-border caret-transparent gap-x-[54px] grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-[54px] text-center w-full md:gap-x-0 md:flex md:grid-cols-[repeat(4,minmax(0px,1fr))] md:gap-y-0 md:text-left md:w-6/12">
            <FooterColumn />
          </div>
        </div>
        <div className="items-start box-border caret-transparent gap-x-[54px] grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-[1440px] gap-y-[54px] mx-auto pt-[51px] px-0 md:gap-x-0 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-0 md:pt-0 md:px-[77px]">
          <FooterSocial />
          <div className="items-center box-border caret-transparent flex justify-normal md:justify-start">
            <img
              src="/img/13.png"
              sizes="(max-width: 900px) calc(100vw - 32px), (min-width: 932px) 868px, 868px"
              className="aspect-[auto_80_/_123] box-border caret-transparent max-w-full w-20"
            />
          </div>
          <div className="items-center box-border caret-transparent gap-x-1 hidden col-end-auto col-start-auto justify-center gap-y-1 md:col-end-[span_2] md:col-start-[span_2] md:justify-between">
            <a
              href="https://www.allbirds.com/?_ga=2.85219225.1698319504.1694397111-290296150.1693902805"
              className="box-border caret-transparent"
            >
              <img
                src="/img/icon-18.svg"
                alt="Icon"
                className="box-border caret-transparent h-[22px] w-[37px]"
              />
            </a>
            <a
              href="https://www.allbirds.co.kr/"
              className="box-border caret-transparent"
            >
              <img
                src="/img/icon-19.svg"
                alt="Icon"
                className="box-border caret-transparent h-[22px] w-[37px]"
              />
            </a>
            <a
              href="https://www.allbirds.eu/"
              className="box-border caret-transparent"
            >
              <img
                src="/img/icon-20.svg"
                alt="Icon"
                className="box-border caret-transparent h-[22px] w-[37px]"
              />
            </a>
            <a
              href="https://www.allbirds.co.uk/"
              className="box-border caret-transparent"
            >
              <img
                src="/img/icon-21.svg"
                alt="Icon"
                className="box-border caret-transparent w-[37px]"
              />
            </a>
            <a
              href="https://www.allbirds.ca/"
              className="box-border caret-transparent"
            >
              <img
                src="/img/icon-22.svg"
                alt="Icon"
                className="box-border caret-transparent w-[37px]"
              />
            </a>
            <a
              href="https://www.allbirds.com.au/?_ga=2.81220247.1698319504.1694397111-290296150.1693902805"
              className="box-border caret-transparent"
            >
              <img
                src="/img/icon-23.svg"
                alt="Icon"
                className="box-border caret-transparent h-[22px] w-[37px]"
              />
            </a>
            <a
              href="https://www.allbirds.co.nz/?_ga=2.81220247.1698319504.1694397111-290296150.1693902805"
              className="box-border caret-transparent"
            >
              <img
                src="/img/icon-24.svg"
                alt="Icon"
                className="box-border caret-transparent h-[22px] w-[37px]"
              />
            </a>
            <a
              href="https://www.allbirds.jp/?_ga=2.81220247.1698319504.1694397111-290296150.1693902805"
              className="box-border caret-transparent"
            >
              <img
                src="/img/icon-25.svg"
                alt="Icon"
                className="box-border caret-transparent h-[22px] w-[37px]"
              />
            </a>
            <a
              href="https://www.allbirds.cn/"
              className="box-border caret-transparent"
            >
              <img
                src="/img/icon-26.svg"
                alt="Icon"
                className="box-border caret-transparent h-[22px] w-[37px]"
              />
            </a>
          </div>
        </div>
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
      </div>
    </div>
  );
};
