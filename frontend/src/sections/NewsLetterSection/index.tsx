import { NewsletterForm } from "@/sections/NewsletterSection/components/NewsletterForm";

export const NewsletterSection = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="relative bg-neutral-100 box-border caret-transparent overflow-hidden py-[50px]">
        <div className="box-border caret-transparent max-w-full w-full mx-auto px-5 md:max-w-[1400px]">
          <div className="box-border caret-transparent max-w-[600px] text-center mx-auto">
            <h2 className="text-4xl font-light box-border caret-transparent leading-[43.2px] mb-[7.5px] md:text-5xl md:leading-[57.6px] md:mb-2.5">
              올버즈 뉴스레터 구독
            </h2>
            <p className="text-[14.4px] box-border caret-transparent leading-[23.04px] opacity-80 mb-[30px] md:text-base md:leading-[25.6px] md:mb-10">
              최신 신제품 소식과 혜택을 가장 먼저 받아보세요.
            </p>
            <div className="box-border caret-transparent mb-5">
              <NewsletterForm />
            </div>
            <div className="text-stone-500 text-[10.8px] box-border caret-transparent leading-[16.2px] opacity-70 md:text-xs md:leading-[18px]">
              <p className="text-[10.8px] box-border caret-transparent leading-[16.2px] opacity-70 md:text-xs md:leading-[18px]">
                구독 시 마케팅 이메일 수신에 동의하게 됩니다. 자세한 내용은{" "}
                <a
                  href="https://allbirds.co.kr/pages/privacy-policy-24-07"
                  title="https://allbirds.co.kr/pages/privacy-policy-24-07"
                  className="text-neutral-800 text-[10.8px] box-border caret-transparent leading-[16.2px] underline md:text-xs md:leading-[18px]"
                >
                  개인정보 처리방침
                </a>
                및{" "}
                <a
                  href="https://allbirds.co.kr/pages/terms-of-use_240920"
                  title="https://allbirds.co.kr/pages/terms-of-use_240920"
                  className="text-neutral-800 text-[10.8px] box-border caret-transparent leading-[16.2px] underline md:text-xs md:leading-[18px]"
                >
                  이용약관
                </a>
                을 확인해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
