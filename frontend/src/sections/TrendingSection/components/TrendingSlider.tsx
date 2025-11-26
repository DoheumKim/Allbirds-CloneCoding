import { ProductCard } from "@/components/ProductCard";

export const TrendingSlider = () => {
  return (
    <div className="bg-white box-border caret-transparent py-10">
      <div className="box-border caret-transparent max-w-[1450px] mx-auto px-5 md:px-10">
        <div className="box-border caret-transparent text-left mb-10">
          <h2 className="text-[35.2px] font-bold box-border caret-transparent leading-[52.8px] md:text-[44px] md:leading-[66px]">
            실시간 인기
          </h2>
        </div>
        <div className="relative box-border caret-transparent">
          <button
            aria-label="Previous"
            className="absolute items-center bg-white caret-transparent hidden h-10 justify-center opacity-90 text-center transform-none w-10 z-[3] p-0 rounded-[50%] -left-5 top-2/4 md:flex md:opacity-30 md:translate-y-[-50.0%]"
          >
            <img
              src="/img/icon-13.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 w-5"
            />
          </button>
          <div className="box-border caret-transparent gap-x-5 flex gap-y-5 scroll-smooth overflow-auto">
            <ProductCard
              href="/products/mens-tree-runners"
              imageUrl="/img/17.png"
              imageAlt="남성 트리 러너 - 제트 블랙 (블랙)"
              rank="1"
              productName="남성 트리 러너"
              productColor="제트 블랙 (블랙)"
              currentPrice="₩78,000"
              originalPrice="₩150,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["260", "270", "280"]}
              hiddenSizes={["290", "300"]}
              showMoreIndicator={true}
            />
            <ProductCard
              href="/products/mens-wool-dasher-2-mizzle-stony-cream-ntrl-white"
              imageUrl="/img/21.png"
              imageAlt="남성 울 대셔 미즐 - 스토니 크림 (내추럴 화이트)"
              rank="2"
              productName="남성 울 대셔 미즐"
              productColor="스토니 크림 (내추럴 화이트)"
              currentPrice="₩98,000"
              originalPrice="₩200,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["260", "265", "270"]}
              hiddenSizes={["275", "280"]}
              showMoreIndicator={true}
            />
            <ProductCard
              href="/products/womens-wool-dasher-2-mizzle-stony-cream-ntrl-white"
              imageUrl="/img/20.png"
              imageAlt="여성 울 대셔 미즐 - 스토니 크림 (내추럴 화이트)"
              rank="3"
              productName="여성 울 대셔 미즐"
              productColor="스토니 크림 (내추럴 화이트)"
              currentPrice="₩98,000"
              originalPrice="₩200,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["245"]}
              hiddenSizes={[]}
              showMoreIndicator={false}
            />
            <ProductCard
              href="/products/womens-wool-runner-go-fluff"
              imageUrl="/img/19.png"
              imageAlt="여성 울 러너 고 플러프 - 내추럴 화이트(내추럴 화이트)"
              rank="4"
              productName="여성 울 러너 고 플러프"
              productColor="내추럴 화이트(내추럴 화이트)"
              currentPrice="₩78,000"
              originalPrice="₩180,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["235", "240", "245"]}
              hiddenSizes={["250", "255"]}
              showMoreIndicator={true}
            />
            <ProductCard
              href="/products/mens-canvas-piper-new-natural-black"
              imageUrl="/img/29.png"
              imageAlt="남성 캔버스 파이퍼 - 뉴 내추럴 블랙 (내추럴 블랙)"
              rank="5"
              productName="남성 캔버스 파이퍼"
              productColor="뉴 내추럴 블랙 (내추럴 블랙)"
              currentPrice="₩78,000"
              originalPrice="₩150,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["265", "270", "275"]}
              hiddenSizes={["285"]}
              showMoreIndicator={true}
            />
            <ProductCard
              href="/products/mens-wool-runner-nz-natural-black"
              imageUrl="/img/18.png"
              imageAlt="남성 울 러너 NZ - 내추럴 블랙 (내추럴 블랙)"
              rank="6"
              productName="남성 울 러너 NZ"
              productColor="내추럴 블랙 (내추럴 블랙)"
              currentPrice="₩119,000"
              originalPrice="₩170,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["260", "265", "270"]}
              hiddenSizes={["275", "280"]}
              showMoreIndicator={true}
            />
            <ProductCard
              href="/products/womens-wool-runners-natural-white"
              imageUrl="/img/1.webp"
              imageAlt="여성 울 러너 - 내추럴 화이트 (크림)"
              rank="7"
              productName="여성 울 러너"
              productColor="내추럴 화이트 (크림)"
              currentPrice="₩78,000"
              originalPrice="₩150,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["230", "240", "250"]}
              hiddenSizes={["260"]}
              showMoreIndicator={true}
            />
            <ProductCard
              href="/products/mens-wool-runners-true-black"
              imageUrl="/img/2.webp"
              imageAlt="남성 울 러너 - 트루 블랙 (크림)"
              rank="8"
              productName="남성 울 러너"
              productColor="트루 블랙 (크림)"
              currentPrice="₩78,000"
              originalPrice="₩150,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["260", "270"]}
              hiddenSizes={[]}
              showMoreIndicator={false}
            />
            <ProductCard
              href="/products/womens-tree-runners-jet-black-black"
              imageUrl="/img/7.webp"
              imageAlt="여성 트리 러너 - 제트 블랙 (블랙)"
              rank="9"
              productName="여성 트리 러너"
              productColor="제트 블랙 (블랙)"
              currentPrice="₩78,000"
              originalPrice="₩150,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["230", "240", "250"]}
              hiddenSizes={["260"]}
              showMoreIndicator={true}
            />
            <ProductCard
              href="/products/mens-wool-runner-2"
              imageUrl="/img/8.webp"
              imageAlt="남성 울 러너 고 - 다크 그레이 (라이트 그레이)"
              rank="10"
              productName="남성 울 러너 고"
              productColor="다크 그레이 (라이트 그레이)"
              currentPrice="₩98,000"
              originalPrice="₩170,000"
              iconUrl="/img/icon-14.svg"
              availableSizesLabel="주문 가능 사이즈"
              sizes={["250", "260", "270"]}
              hiddenSizes={["280", "290"]}
              showMoreIndicator={true}
            />
          </div>
          <button
            aria-label="Next"
            className="absolute items-center bg-white caret-transparent hidden h-10 justify-center opacity-30 text-center transform-none w-10 z-[3] p-0 rounded-[50%] -right-5 top-2/4 md:flex md:opacity-90 md:translate-y-[-50.0%]"
          >
            <img
              src="/img/icon-15.svg"
              alt="Icon"
              className="box-border caret-transparent h-5 w-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
