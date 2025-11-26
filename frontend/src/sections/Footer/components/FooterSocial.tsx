export const FooterSocial = () => {
  return (
    <div className="[align-items:normal] box-border caret-transparent gap-x-5 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-[269px] gap-y-5 text-start md:items-start md:justify-items-start md:text-left">
      <p className="text-base font-bold box-border caret-transparent leading-[19px] text-start md:text-left">
        ALLBIRDS를 팔로우 하세요!
      </p>
      <p className="text-sm box-border caret-transparent leading-[17px] text-start md:text-left">
        최신 정보나 Allbirds 상품의 스냅샷 등을 보실 수 있습니다. 오! 물론
        귀여운 양도 보실 수 있죠. #weareallbirds #올버즈
      </p>
      <nav
        role="navigation"
        aria-label="Social links"
        className="box-border caret-transparent text-start md:text-left"
      >
        <ul className="items-center box-border caret-transparent gap-x-8 flex list-none gap-y-8 text-start pl-0 md:text-left">
          <li className="box-border caret-transparent text-start md:text-left">
            <a
              href="https://www.instagram.com/allbirdskorea"
              title="Instagram"
              className="box-border caret-transparent block text-start md:text-left"
            >
              <img
                src="/img/icon-16.svg"
                alt="Icon"
                className="box-border caret-transparent h-5 text-start w-5 md:text-left"
              />
            </a>
          </li>
          <li className="box-border caret-transparent text-start md:text-left">
            <a
              href="https://www.facebook.com/weareallbirds"
              title="Facebook"
              className="box-border caret-transparent block text-start md:text-left"
            >
              <img
                src="/img/icon-17.svg"
                alt="Icon"
                className="box-border caret-transparent h-5 text-start w-[11px] md:text-left"
              />
            </a>
          </li>
          <li className="box-border caret-transparent text-start md:text-left">
            <a
              href="https://www.youtube.com/@allbirdskorea"
              title="Youtube"
              className="box-border caret-transparent block text-start md:text-left"
            ></a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
