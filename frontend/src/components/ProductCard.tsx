export type ProductCardProps = {
  href: string;
  imageUrl: string;
  imageAlt: string;
  rank: string;
  productName: string;
  productColor: string;
  currentPrice: string;
  originalPrice: string;
  iconUrl: string;
  availableSizesLabel: string;
  sizes: string[];
  hiddenSizes?: string[];
  showMoreIndicator?: boolean;
};

export const ProductCard = (props: ProductCardProps) => {
  return (
    <a
      href={props.href}
      className="box-border caret-transparent flex basis-[calc(50%_-_10px)] flex-col shrink-0 min-w-[calc(50%_-_10px)] snap-start md:basis-[calc(20%_-_16px)] md:min-w-[calc(20%_-_16px)]"
    >
      <div className="relative bg-gray-200 box-border caret-transparent w-full overflow-hidden pb-[100%]">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="absolute aspect-[auto_600_/_600] box-border caret-transparent h-full max-w-full object-cover w-full left-0 top-0"
        />
        <div className="absolute text-white font-bold items-center bg-neutral-800 box-border caret-transparent flex h-10 justify-center min-w-10 z-[2] p-2 rounded-bl rounded-br rounded-tl rounded-tr left-2.5 top-2.5">
          {props.rank}
        </div>
      </div>
      <div className="bg-white box-border caret-transparent gap-x-2 flex flex-col gap-y-2 p-3">
        <h3 className="text-[26px] font-bold box-border caret-transparent leading-[33.8px]">
          <span className="text-sm font-medium box-border caret-transparent block leading-[18.2px]">
            {props.productName}
          </span>
          <span className="text-stone-500 text-xs font-medium box-border caret-transparent block leading-[15.6px] mt-0.5">
            {props.productColor}
          </span>
        </h3>
        <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
          <span className="text-xs box-border caret-transparent block text-nowrap md:text-sm">
            {props.currentPrice}
          </span>
          <span className="text-stone-500 text-xs box-border caret-transparent block opacity-70 line-through text-nowrap md:text-sm">
            {props.originalPrice}
          </span>
        </div>
        <div className="box-border caret-transparent">
          <div className="text-stone-500 text-[11px] items-center box-border caret-transparent gap-x-1 flex gap-y-1 mb-1">
            <img
              src={props.iconUrl}
              alt="Icon"
              className="box-border caret-transparent shrink-0 h-[11px] w-[11px]"
            />
            <span className="box-border caret-transparent block">
              {props.availableSizesLabel}
            </span>
          </div>
          <div className="items-center box-border caret-transparent gap-x-1 flex flex-wrap gap-y-1">
            {props.sizes.map((size, index) => (
              <span
                key={index}
                className="text-[11px] bg-neutral-100 box-border caret-transparent block text-nowrap px-1.5 py-0.5 rounded-sm"
              >
                {size}
              </span>
            ))}
            {props.hiddenSizes &&
              props.hiddenSizes.map((size, index) => (
                <span
                  key={`hidden-${index}`}
                  className="text-[11px] bg-neutral-100 box-border caret-transparent hidden min-h-0 min-w-0 text-nowrap px-1.5 py-0.5 rounded-sm md:block md:min-h-[auto] md:min-w-[auto]"
                >
                  {size}
                </span>
              ))}
            {props.showMoreIndicator && (
              <span className="text-[11px] box-border caret-transparent block min-h-[auto] min-w-[auto] opacity-70 md:hidden md:min-h-0 md:min-w-0"></span>
            )}
            {!props.showMoreIndicator &&
              props.hiddenSizes &&
              props.hiddenSizes.length === 0 && (
                <span className="text-[11px] box-border caret-transparent hidden opacity-70"></span>
              )}
          </div>
        </div>
      </div>
    </a>
  );
};
