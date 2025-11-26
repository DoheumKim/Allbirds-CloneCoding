import { CartEmpty } from "@/components/CartDrawer/components/CartEmpty";

export const CartDrawerContent = () => {
  return (
    <div className="fixed bg-neutral-100 box-border caret-transparent h-[1000px] max-w-[430px] translate-x-[100.0%] w-full z-[11111111] right-0 top-0">
      <div className="box-border caret-transparent z-[1050] pt-6 pb-5 px-5">
        <div className="items-center box-border caret-transparent gap-x-2 flex flex-col justify-center gap-y-2 pb-0 md:pb-5">
          <button className="absolute bg-transparent caret-transparent block h-8 text-center w-8 p-0 left-5 top-3.5">
            <img
              src="/img/icon-9.svg"
              alt="Icon"
              className="box-border caret-transparent h-full w-full"
            />
          </button>
          <div className="relative box-border caret-transparent">
            <span className="absolute text-black text-xs font-bold box-border caret-transparent block leading-4 left-4 top-1.5">
              0
            </span>
            <img
              src="/img/icon-10.svg"
              alt="Icon"
              className="box-border caret-transparent h-[31px] w-[34px]"
            />
          </div>
          <div className="items-center box-border caret-transparent flex">
            <p className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6">
              회원가입 시 1만원 할인 쿠폰 증정
              <br className="text-sm box-border caret-transparent leading-5 md:text-base md:leading-6" />
              (마케팅 수신 동의 필수)
            </p>
            <div className="box-border caret-transparent ml-4"></div>
          </div>
        </div>
        <div className="box-border caret-transparent flex flex-col h-[910px] max-h-[800px] overflow-x-auto overflow-y-scroll md:max-h-[700px]">
          <div className="box-border caret-transparent max-h-[800px]">
            <div className="box-border caret-transparent">
              <CartEmpty />
            </div>
          </div>
          <div className="fixed bg-neutral-100 box-border caret-transparent hidden px-6 py-[12.8px] bottom-0 inset-x-0">
            <div className="bg-neutral-100 box-border caret-transparent z-10 py-2.5 border-t border-solid md:py-5">
              <div className="text-sm font-bold items-center box-border caret-transparent flex justify-between leading-5">
                <p className="box-border caret-transparent">총액</p>
                <p className="box-border caret-transparent">₩0</p>
              </div>
              <div className="box-border caret-transparent">
                <a
                  href="/checkout"
                  className="text-white text-sm font-bold items-center bg-neutral-800 box-border caret-transparent flex h-12 justify-center tracking-[2px] leading-[21px] text-center uppercase text-nowrap w-full border border-neutral-800 mt-2.5 px-8 py-4 rounded-sm border-solid hover:text-neutral-800 hover:bg-white"
                >
                  결제
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bg-zinc-300/60 box-border caret-transparent hidden h-full w-full z-[1100] left-0 top-0"></div>
      <div className="fixed text-white bg-black box-border caret-transparent translate-y-[120.0%] z-[1150] px-[31px] py-9 bottom-0 inset-x-0">
        <img
          src="/img/icon-12.svg"
          alt="Icon"
          className="absolute box-border caret-transparent h-5 w-5 z-[9] right-6 top-6"
        />
        <div className="box-border caret-transparent text-center">
          <p className="text-sm font-bold box-border caret-transparent leading-5">
            세일 제품을 고르셨군요!
          </p>
          <p className="text-sm box-border caret-transparent hidden leading-5 mt-2 md:block">
            7일 이내 미착용 제품에 한하여 교환/환불 가능합니다.
          </p>
          <p className="text-sm box-border caret-transparent block leading-5 mt-2 md:hidden">
            7일 이내 미착용 제품에 한하여
            <br className="box-border caret-transparent" />
            교환/환불 가능합니다.
          </p>
          <div className="box-border caret-transparent flex justify-center">
            <div className="box-border caret-transparent w-[69px]">
              <img
                src="/img/9.webp"
                sizes="(max-width: 900px) calc(100vw - 32px), (min-width: 932px) 868px, 868px"
                className="aspect-[auto_1027_/_1100] box-border caret-transparent max-w-full w-[1027px]"
              />
            </div>
          </div>
          <div className="box-border caret-transparent mt-4">
            <button className="text-black text-sm font-semibold bg-white caret-transparent h-[50px] w-[198px] px-4 py-2 rounded-lg md:w-[254px]">
              결제 계속하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
