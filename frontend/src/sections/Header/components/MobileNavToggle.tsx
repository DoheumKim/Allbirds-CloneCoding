export const MobileNavToggle = () => {
  return (
    <div className="items-center box-border caret-transparent flex h-[68px] justify-between w-full z-20 px-5 py-3.5 md:w-auto md:px-0">
      <div className="box-border caret-transparent gap-x-4 flex justify-start min-h-[auto] min-w-[auto] gap-y-4 md:hidden md:min-h-0 md:min-w-0">
        <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
          <label
            role="button"
            aria-label="Menu"
            className="items-center box-border caret-transparent flex h-6 justify-center min-h-[auto] min-w-[auto] w-6 md:min-h-0 md:min-w-0"
          >
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
              <img
                src="/img/icon-5.svg"
                alt="Icon"
                className="box-border caret-transparent h-[18px] w-[22px]"
              />
            </span>
          </label>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-4 flex justify-end gap-y-4 pr-0 md:pr-20">
        <a
          href="/search"
          className="items-center box-border caret-transparent flex h-6 justify-center w-6"
        >
          <img
            src="/img/icon-6.svg"
            alt="Icon"
            className="box-border caret-transparent h-[26px] w-[26px]"
          />
        </a>
        <a
          href="/account/login"
          className="items-center box-border caret-transparent flex h-6 justify-center w-6"
        >
          <img
            src="/img/icon-7.svg"
            alt="Icon"
            className="box-border caret-transparent h-[26px] w-[26px]"
          />
        </a>
        <a className="relative items-center box-border caret-transparent flex h-6 justify-center w-6">
          <img
            src="/img/icon-8.svg"
            alt="Icon"
            className="box-border caret-transparent h-[23px] w-[22px]"
          />
          <div className="box-border caret-transparent after:accent-auto after:items-center after:bg-black after:box-border after:caret-transparent after:text-white after:flex after:text-[8px] after:not-italic after:normal-nums after:font-medium after:h-[15px] after:justify-center after:tracking-[normal] after:leading-7 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:translate-x-[7.5px] after:translate-y-[-7.5px] after:visible after:w-[15px] after:z-10 after:rounded-[50%] after:border-separate after:right-[3px] after:top-[18px] after:font-pretendard"></div>
        </a>
      </div>
    </div>
  );
};
