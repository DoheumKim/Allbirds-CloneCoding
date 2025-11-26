import { HeroSlide } from "@/sections/Hero/components/HeroSlide";

export const HeroSlider = () => {
  return (
    <div className="relative box-border caret-transparent w-full overflow-hidden font-pretendard">
      <div className="relative box-border caret-transparent h-[500px] w-full md:h-[800px]">
        <div className="box-border caret-transparent flex h-full">
          <HeroSlide />
        </div>
      </div>
    </div>
  );
};
