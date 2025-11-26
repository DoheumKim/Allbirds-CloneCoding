import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Header } from "@/sections/Header";
import { CartDrawer } from "@/components/CartDrawer";
import { Hero } from "@/sections/Hero";
import { TrendingSection } from "@/sections/TrendingSection";
import { MaterialsSection } from "@/sections/MaterialsSection";
import { NewsletterSection } from "@/sections/NewsletterSection";
import { Footer } from "@/sections/Footer";
import { FloatingButton } from "@/components/FloatingButton";

export const App = () => {
  return (
    <body className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto bg-neutral-100 box-border caret-transparent grid grid-cols-[100%] grid-rows-[auto_auto_1fr_auto] tracking-[normal] leading-7 list-outside list-disc min-h-full overflow-x-auto overflow-y-scroll pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-pretendard">
      <div className="box-border caret-transparent"></div>
      <AnnouncementBanner />
      <Header />
      <CartDrawer />
      <main className="relative box-border caret-transparent">
        <Hero />
        <div className="box-border caret-transparent">
          <section className="box-border caret-transparent h-9 md:h-12"></section>
        </div>
        <TrendingSection />
        <div className="box-border caret-transparent">
          <section className="box-border caret-transparent h-9 md:h-12"></section>
        </div>
        <MaterialsSection />
        <div className="box-border caret-transparent overflow-hidden"></div>
        <NewsletterSection />
      </main>
      <Footer />
      <ul className="box-border caret-transparent hidden list-none pl-0">
        <li className="box-border caret-transparent">
          Choosing a selection results in a full page refresh.
        </li>
        <li className="box-border caret-transparent">Opens in a new window.</li>
      </ul>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent"></div>
        <div className="fixed box-border caret-transparent w-4/5 z-[9999] right-5 top-[30px] md:w-auto"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="fixed items-center bg-white shadow-[rgba(0,0,0,0.2)_0px_1px_10px_1px] box-border caret-transparent hidden h-[70px] justify-center w-[70px] z-[99] p-[15px] rounded-[50%] bottom-[15px] md:bottom-[25px]"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
        <div className="box-border caret-transparent"></div>
      </div>
      <div className="box-border caret-transparent"></div>
      <div className="box-border caret-transparent"></div>
      <FloatingButton />
      <div className="relative box-border caret-transparent z-[10000000]">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent">
            <div className="text-black/90 leading-[normal] w-0 font-apple_system">
              <div className="fixed flex z-10 right-6 bottom-6">
                <button
                  type="button"
                  className="bg-transparent shadow-[rgba(0,0,0,0)_0px_0px_0px_0px] block text-center p-0"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
