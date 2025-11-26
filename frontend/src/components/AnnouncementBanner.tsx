export const AnnouncementBanner = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="text-white items-center bg-red-600 box-border caret-transparent flex justify-center">
        <div className="relative items-center box-border caret-transparent gap-x-2 flex flex-wrap justify-center leading-[25.6px] gap-y-2 text-center w-full mx-auto px-4 py-3 md:gap-x-3 md:gap-y-3">
          <div className="text-xs box-border caret-transparent leading-4">
            <p className="box-border caret-transparent">
              연중 최대 혜택 · 올버즈 슈퍼 블랙 프라이데이 |{" "}
              <a
                href="/collections/mens-off"
                title="남성 세일 제품"
                className="box-border caret-transparent underline"
              >
                남성
              </a>
              <a
                href="/collections/womens-off"
                title="여성 세일 제품"
                className="box-border caret-transparent underline"
              >
                여성
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
