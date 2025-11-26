import { FeatureCard } from "@/sections/Footer/components/FeatureCard";

export const FooterFeatures = () => {
  return (
    <section className="box-border caret-transparent">
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent max-w-[1440px] mx-auto px-5 md:px-20">
          <div className="relative box-border caret-transparent">
            <div className="box-border caret-transparent gap-x-4 flex grid-cols-[repeat(2,1fr)] gap-y-4 overflow-auto md:gap-x-12 md:grid md:grid-cols-[repeat(3,1fr)] md:gap-y-12 md:snap-none md:overflow-visible">
              <FeatureCard
                imageUrl="/img/5.webp"
                imageClassName="aspect-[auto_960_/_800]"
                title="매일 경험하는 편안함"
                description="올버는 마치 구름 위를 걷는 듯한 가벼움과, 바람처럼 자유로운 탄력을 선사합니다. 놀라운 편안함은 긴 여정도 짧은 산책처럼 느껴집니다."
              />
              <FeatureCard
                imageUrl="/img/4.webp"
                imageClassName="aspect-[auto_600_/_501]"
                title="지속 가능한 발걸음"
                description="소재를 고르는 순간부터 신발이 당신에게 닿는 그 순간까지 지구에 남기는 흔적을 헤아립니다. 탄소 발자국을 제로에 가깝게 줄이려는 노력에 동참해주세요."
              />
              <FeatureCard
                imageUrl="/img/6.webp"
                imageClassName="aspect-[auto_960_/_1200]"
                title="지구에서 온 소재"
                description="올버즈는 가능한 모든 곳에서 석유 기반 합성소재를 천연 대안으로 대체합니다. 울, 나무, 사탕수수 같은 자연 소재는 부드럽고 통기성이 좋습니다."
              />
            </div>
            <div className="box-border caret-transparent gap-x-2 flex justify-center gap-y-2 mt-6 md:hidden">
              <button
                aria-label="slide 1"
                className="bg-transparent caret-transparent block h-2 min-h-[auto] min-w-[auto] text-center w-2 p-0 rounded-[50%] md:inline-block md:min-h-0 md:min-w-0"
              ></button>
              <button
                aria-label="slide 2"
                className="bg-stone-300 caret-transparent block h-2 min-h-[auto] min-w-[auto] opacity-50 text-center w-2 p-0 rounded-[50%] md:inline-block md:min-h-0 md:min-w-0"
              ></button>
              <button
                aria-label="slide 3"
                className="bg-stone-300 caret-transparent block h-2 min-h-[auto] min-w-[auto] opacity-50 text-center w-2 p-0 rounded-[50%] md:inline-block md:min-h-0 md:min-w-0"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
