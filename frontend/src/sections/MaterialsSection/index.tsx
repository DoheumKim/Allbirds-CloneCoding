import { MaterialCard } from "@/sections/MaterialsSection/components/MaterialCard";

export const MaterialsSection = () => {
  return (
    <div className="bg-neutral-100 box-border caret-transparent">
      <div className="box-border caret-transparent max-w-full w-full mt-5 mx-auto px-5 md:max-w-[1400px] md:mt-10">
        <div className="box-border caret-transparent">
          <div className="text-4xl font-light box-border caret-transparent leading-9 pb-5 md:text-5xl md:leading-[48px] md:pb-10">
            우리가 사용하는 소재
          </div>
          <div className="relative box-border caret-transparent list-none z-[1] overflow-clip mx-auto">
            <div className="relative caret-transparent flex h-full w-full z-[1]">
              <MaterialCard
                href="/pages/our-materials-wool"
                imageUrl="/img/10.avif"
                imageSizes="(max-width: 900px) calc(100vw - 32px), (min-width: 932px) 868px, 868px"
                title="ZQ 메리노 울"
                description="최상급 울 소재"
                linkText="더 알아보기"
              />
              <MaterialCard
                href="/pages/our-materials-tree"
                imageUrl="/img/11.avif"
                imageSizes="(max-width: 900px) calc(100vw - 32px), (min-width: 932px) 868px, 868px"
                title="유칼립투스 나무"
                description="실크처럼 매끄러운 촉감"
                linkText="더 알아보기"
              />
              <MaterialCard
                href="/pages/our-materials-sugar"
                imageUrl="/img/12.avif"
                imageSizes="(max-width: 900px) calc(100vw - 32px), (min-width: 932px) 868px, 868px"
                title="사탕수수"
                description="부드러운 SweetFoam®의 주 소재"
                linkText="더 알아보기"
              />
            </div>
          </div>
          <div className="bg-neutral-300 box-border caret-transparent hidden h-0.5 w-[200px] mx-auto my-7">
            <div className="bg-black box-border caret-transparent h-0.5 w-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
