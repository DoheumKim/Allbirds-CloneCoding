export const SaleModal = () => {
  return (
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
  );
};
