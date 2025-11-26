import { Logo } from "@/sections/Header/components/Logo";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { MobileNavToggle } from "@/sections/Header/components/MobileNavToggle";

export const Header = () => {
  return (
    <header className="sticky bg-white box-border caret-transparent w-full z-[1049] top-0">
      <div className="relative items-center bg-white box-border caret-transparent flex">
        <input
          type="checkbox"
          className="bg-transparent box-border caret-transparent hidden p-0"
        />
        <Logo />
        <DesktopNav />
        <MobileNavToggle />
      </div>
    </header>
  );
};
