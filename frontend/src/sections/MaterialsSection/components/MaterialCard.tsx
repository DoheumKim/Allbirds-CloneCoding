export type MaterialCardProps = {
  href: string;
  imageUrl: string;
  imageSizes: string;
  title: string;
  description: string;
  linkText: string;
};

export const MaterialCard = (props: MaterialCardProps) => {
  return (
    <div className="relative box-border caret-transparent shrink-0 w-[261.719px] pl-0 pr-2.5 pt-0 pb-5 md:w-[413.333px] md:pl-2.5 md:pt-5">
      <a
        href={props.href}
        className="relative bg-white box-border caret-transparent block overflow-hidden rounded-[5px]"
      >
        <div className="absolute box-border caret-transparent z-10 inset-0"></div>
        <img
          src={props.imageUrl}
          sizes={props.imageSizes}
          className="aspect-[auto_1110_/_1110] box-border caret-transparent h-full max-w-full w-full rounded-[5px] md:h-auto md:w-[1110px]"
        />
      </a>
      <div className="bg-white box-border caret-transparent flex flex-col h-[200px] justify-between pb-6 px-5 rounded-b-[5px] md:h-[210px]">
        <a
          href={props.href}
          className="relative bg-white box-border caret-transparent block overflow-hidden rounded-[5px]"
        >
          <div className="box-border caret-transparent pl-0 pt-[34px] pb-7 md:pl-2.5 md:py-[30px]">
            <div className="text-sm font-bold box-border caret-transparent leading-[14px] mb-2.5 md:text-base md:leading-4">
              {props.title}
            </div>
            <div className="text-[22px] font-light box-border caret-transparent leading-[25.3px] md:text-2xl md:leading-6">
              {props.description}
            </div>
          </div>
        </a>
        <a
          href={props.href}
          className="text-xs items-center box-border caret-transparent flex h-[42px] justify-center tracking-[2px] leading-3 max-w-[229px] text-center uppercase text-nowrap w-full border border-neutral-800 mx-auto px-8 py-4 rounded-sm border-solid md:text-base md:h-[52px] md:leading-4 md:max-w-[346px] hover:text-white hover:bg-neutral-800"
        >
          {props.linkText}
        </a>
      </div>
    </div>
  );
};
