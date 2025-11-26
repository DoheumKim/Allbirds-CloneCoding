export type FeatureCardProps = {
  imageUrl: string;
  imageClassName: string;
  title: string;
  description: string;
};

export const FeatureCard = (props: FeatureCardProps) => {
  return (
    <div className="box-border caret-transparent basis-[85%] shrink-0 snap-center text-left md:basis-auto md:shrink md:snap-align-none">
      <div className="relative aspect-[4_/_3] bg-neutral-100 box-border caret-transparent overflow-hidden mb-6">
        <img
          src={props.imageUrl}
          alt=""
          sizes="(min-width: 990px) 33vw, (min-width: 750px) 50vw, 100vw"
          className={`box-border caret-transparent h-full max-w-full object-cover w-full ${props.imageClassName}`}
        />
      </div>
      <div className="box-border caret-transparent">
        <h3 className="text-lg box-border caret-transparent tracking-[-0.18px] leading-[23.4px] mb-3 md:text-2xl md:tracking-[-0.24px] md:leading-[31.2px]">
          {props.title}
        </h3>
        <div className="text-stone-500 text-[15px] box-border caret-transparent leading-6 mb-4 md:text-base md:leading-[25.6px]">
          <p className="text-[15px] box-border caret-transparent leading-6 md:text-base md:leading-[25.6px]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
