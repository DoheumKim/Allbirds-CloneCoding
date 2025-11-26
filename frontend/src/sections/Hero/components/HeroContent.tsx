export const HeroContent = () => {
  return (
    <div className="absolute box-border caret-transparent max-w-[90%] text-center translate-x-[-50.0%] w-[90%] z-[2] p-5 left-2/4 top-auto bottom-10 md:max-w-[600px] md:text-left md:translate-y-[-50.0%] md:left-[5%] md:top-2/4 md:bottom-auto">
      <h2 className="text-black text-lg font-bold box-border caret-transparent leading-[21.6px] text-center mb-3 font-pretendard md:text-[40px] md:leading-[48px] md:text-left md:mb-4">
        슈퍼 블랙 프라이데이
      </h2>
      <p className="text-black text-base font-light box-border caret-transparent leading-[22.4px] text-center mb-6 md:text-xl md:leading-7 md:text-left md:mb-8">
        연중 최대 혜택. UP TO 50% OFF.
      </p>
      <div className="box-border caret-transparent gap-x-[15px] flex flex-wrap justify-center gap-y-[15px] text-center md:justify-normal md:text-left">
        <a
          href="/collections/mens-off"
          className="text-stone-950 text-[14.4px] font-semibold bg-white box-border caret-transparent block text-center px-10 py-2.5 md:text-base md:text-left md:px-[50px] md:py-3 hover:text-black"
        >
          남성 세일
        </a>
        <a
          href="/collections/womens-off"
          className="text-black text-[14.4px] font-semibold bg-white box-border caret-transparent block text-center px-10 py-2.5 md:text-base md:text-left md:px-[50px] md:py-3 hover:text-white hover:bg-black"
        >
          여성 세일
        </a>
      </div>
    </div>
  );
};
