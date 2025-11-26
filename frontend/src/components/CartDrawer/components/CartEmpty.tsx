export const CartEmpty = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col">
      <div className="absolute items-center bg-white box-border caret-transparent hidden flex-col justify-center opacity-70 z-10 inset-0">
        <img
          src="/img/icon-11.svg"
          alt="Icon"
          className="text-black box-border caret-transparent h-5 w-5 -ml-1 mr-3"
        />
      </div>
      <div className="box-border caret-transparent flex flex-col h-full justify-between w-full">
        <p className="font-bold box-border caret-transparent text-center uppercase mb-6">
          장바구니가 비어있습니다.
        </p>
        <div className="box-border caret-transparent">
          <a
            href="/collections/mens-shoes"
            className="text-black font-bold bg-white box-border caret-transparent block text-center uppercase w-64 mb-3 mx-auto px-5 py-2.5 border-2 border-solid hover:text-white"
          >
            남성 쇼핑
          </a>
        </div>
        <div className="box-border caret-transparent">
          <a
            href="/collections/womens-shoes"
            className="text-black font-bold bg-white box-border caret-transparent block text-center uppercase w-64 mb-3 mx-auto px-5 py-2.5 border-2 border-solid hover:text-white"
          >
            여성 쇼핑
          </a>
        </div>
      </div>
    </div>
  );
};
