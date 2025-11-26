import { NavMenu } from "@/sections/Header/components/NavMenu";

export const DesktopNav = () => {
  return (
    <nav className="fixed bg-white box-border caret-transparent flex basis-[0%] flex-col grow h-auto min-h-0 min-w-0 opacity-0 overflow-x-auto overflow-y-scroll pointer-events-none w-screen top-[108px] bottom-0 inset-x-0 md:static md:flex-row md:h-full md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:overflow-x-visible md:overflow-y-visible md:pointer-events-auto md:w-auto md:top-0">
      <NavMenu />
      <div className="bg-neutral-100 box-border caret-transparent gap-x-4 flex justify-between min-h-[auto] min-w-[auto] pointer-events-none gap-y-4 z-50 mt-auto p-4 md:hidden md:min-h-0 md:min-w-0 md:pointer-events-auto">
        <a
          href="/pages/consent"
          className="text-sm font-bold items-center box-border caret-transparent flex h-12 justify-center tracking-[2px] leading-[14px] min-h-[auto] min-w-[auto] pointer-events-none text-center uppercase text-nowrap w-6/12 border border-neutral-800 mr-0 mt-0 px-6 py-4 rounded-sm border-solid md:min-h-0 md:min-w-0 md:pointer-events-auto md:mr-6 md:mt-6 md:px-8"
        >
          가입
        </a>
        <a
          href="https://allbirds.co.kr/account/login"
          className="text-sm font-bold items-center box-border caret-transparent flex h-12 justify-center tracking-[2px] leading-[14px] min-h-[auto] min-w-[auto] pointer-events-none text-center uppercase text-nowrap w-6/12 border border-neutral-800 mr-0 mt-0 px-6 py-4 rounded-sm border-solid md:min-h-0 md:min-w-0 md:pointer-events-auto md:mr-6 md:mt-6 md:px-8"
        >
          로그인
        </a>
      </div>
    </nav>
  );
};
