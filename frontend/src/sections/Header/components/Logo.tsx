export const Logo = () => {
  return (
    <div className="absolute items-center box-border caret-transparent flex flex-wrap left-[calc(50%_-_22px)] min-h-0 min-w-0 translate-x-[-29.94px] z-[99] pl-0 md:static md:min-h-[auto] md:min-w-[auto] md:transform-none md:z-auto md:pl-20 md:left-auto">
      <h1 className="text-5xl font-bold box-border caret-transparent flex leading-[62px]">
        <a
          href="https://allbirds.co.kr/"
          className="items-center box-border caret-transparent flex"
        >
          <img
            src="/img/icon-1.svg"
            alt="Icon"
            className="box-border caret-transparent h-10 w-[98px] md:w-[120px]"
          />
        </a>
      </h1>
    </div>
  );
};
