import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const HeroSlide = () => {
  return (
    <div className="relative box-border caret-transparent h-full min-w-full">
      <img
        src="/img/23.jpg"
        sizes="100vw"
        alt="슈퍼 블랙 프라이데이"
        className="box-border caret-transparent hidden h-full max-w-full object-cover w-full md:block"
      />
      <img
        src="/img/16.jpg"
        sizes="100vw"
        alt="슈퍼 블랙 프라이데이"
        className="box-border caret-transparent block h-full max-w-full object-cover w-full md:hidden"
      />
      <HeroContent />
    </div>
  );
};
