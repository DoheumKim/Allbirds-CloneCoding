export const FooterColumn = () => {
  return (
    <details className="items-start box-border caret-transparent flex flex-col grow grid-cols-[repeat(1,minmax(0px,1fr))] text-left md:[align-items:normal]">
      <summary className="text-4xl box-border caret-transparent list-item leading-[35px] list-inside list-none pointer-events-auto pb-[45px] md:pointer-events-none">
        올버즈 지원
      </summary>
      <ul className="box-border caret-transparent flex flex-col list-none pl-0">
        <li className="box-border caret-transparent">
          <a
            href="/pages/returns-exchanges"
            className="text-base box-border caret-transparent inline-block leading-[19px] pb-[22px] md:leading-[normal] hover:underline"
          >
            교환 및 반품
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a
            href="/pages/repair-service"
            className="text-base box-border caret-transparent inline-block leading-[19px] pb-[22px] md:leading-[normal] hover:underline"
          >
            수선
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a className="text-base box-border caret-transparent inline-block leading-[19px] pb-[22px] md:leading-[normal] hover:underline">
            문의하기
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a
            href="/pages/help"
            className="text-base box-border caret-transparent inline-block leading-[19px] pb-[22px] md:leading-[normal] hover:underline"
          >
            FAQ
          </a>
        </li>
        <li className="box-border caret-transparent">
          <a
            href="https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=NW1YMzRoRzRWNklZSi9JTWRtblUrdz09"
            className="text-base box-border caret-transparent inline-block leading-[19px] md:leading-[normal] hover:underline"
          >
            채용
          </a>
        </li>
      </ul>
    </details>
  );
};
