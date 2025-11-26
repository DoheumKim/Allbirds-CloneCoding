import { useState } from "react";

export const NavMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSecondaryTab, setActiveSecondaryTab] = useState<string>("올버즈");

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
    setActiveSecondaryTab("올버즈");
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const getContentForTab = (tab: string) => {
    switch (tab) {
      case "올버즈":
        return {
          columns: [
            {
              title: "올버즈",
              links: [
                { text: "브랜드 스토리", href: "/pages/brand-story" },
                { text: "올멤버즈", href: "/pages/allmembers" },
                { text: "캠페인", href: "/pages/campaign" },
                { text: "B Corp 인증", href: "/pages/b-corp" },
              ],
            },
            {
              title: "우리의 소재",
              links: [
                { text: "ZQ 메리노 울", href: "/pages/our-materials-wool" },
                { text: "유칼립투스 나무", href: "/pages/our-materials-tree" },
                { text: "사탕수수", href: "/pages/our-materials-sugar" },
                { text: "트리노™", href: "/pages/our-materials-trino" },
              ],
            },
            {
              title: "지속 가능성",
              links: [
                { text: "지속 가능한 실천", href: "/pages/sustainable-practices" },
                { text: "탄소 발자국", href: "/pages/carbon-footprint" },
                { text: "플라이트 플랜", href: "/pages/flight-plan" },
                { text: "재생 농업", href: "/pages/regenerative-agriculture" },
              ],
            },
          ],
          image: {
            src: "/img/10.avif",
            alt: "Sustainability",
            caption: "자연에서 온 소재로 만든 신발",
          },
        };
      case "스토리":
        return {
          columns: [
            {
              title: "우리의 이야기",
              links: [
                { text: "브랜드 철학", href: "/pages/philosophy" },
                { text: "창립자 이야기", href: "/pages/founders" },
                { text: "지속가능성 여정", href: "/pages/sustainability-journey" },
              ],
            },
            {
              title: "혁신",
              links: [
                { text: "제품 개발", href: "/pages/product-development" },
                { text: "기술 혁신", href: "/pages/technology" },
              ],
            },
          ],
          image: {
            src: "/img/11.avif",
            alt: "Story",
            caption: "우리의 여정",
          },
        };
      case "소식":
        return {
          columns: [
            {
              title: "최신 소식",
              links: [
                { text: "보도자료", href: "/pages/press" },
                { text: "이벤트", href: "/pages/events" },
                { text: "뉴스레터", href: "/pages/newsletter" },
              ],
            },
            {
              title: "커뮤니티",
              links: [
                { text: "블로그", href: "/pages/blog" },
                { text: "소셜 미디어", href: "/pages/social" },
              ],
            },
          ],
          image: {
            src: "/img/12.avif",
            alt: "News",
            caption: "최신 소식을 확인하세요",
          },
        };
      default:
        return null;
    }
  };

  const currentContent = getContentForTab(activeSecondaryTab);

  return (
    <ul className="[align-items:normal] box-border caret-transparent flex flex-col h-auto justify-center list-none pointer-events-none w-full p-4 md:items-center md:flex-row md:h-[68px] md:pointer-events-auto md:px-6 md:py-0">
      <li className="relative box-border caret-transparent list-item left-[-5px] opacity-0 pointer-events-none md:static md:flex md:opacity-100 md:pointer-events-auto md:left-auto">
        <a
          href="/collections/womens-off"
          className="font-medium [align-items:normal] box-border caret-transparent flex h-auto justify-between tracking-[1.7px] leading-[21px] min-h-0 min-w-0 pointer-events-none p-2.5 md:items-center md:h-full md:leading-5 md:min-h-[auto] md:min-w-[auto] md:pointer-events-auto md:px-6 md:py-[18px] hover:opacity-70 transition-opacity"
        >
          <span className="relative box-border caret-transparent block leading-[21px] pointer-events-none md:leading-5 md:pointer-events-auto">
            슈퍼 블랙 프라이데이
            <div className="absolute box-border caret-transparent leading-[21px] pointer-events-none right-[15px] -top-7 md:leading-5 md:pointer-events-auto">
              <div className="absolute bg-red-500 box-border caret-transparent h-[9px] leading-[21px] pointer-events-none w-[9px] rounded-[50%] left-[23px] top-[23px] md:leading-5 md:pointer-events-auto"></div>
            </div>
          </span>
        </a>
      </li>
      <li className="relative box-border caret-transparent list-item left-[-5px] opacity-0 pointer-events-none md:static md:flex md:opacity-100 md:pointer-events-auto md:left-auto">
        <a
          href="/pages/our-stores"
          className="font-medium [align-items:normal] box-border caret-transparent flex h-auto justify-between tracking-[1.7px] leading-[21px] min-h-0 min-w-0 pointer-events-none p-2.5 md:items-center md:h-full md:leading-5 md:min-h-[auto] md:min-w-[auto] md:pointer-events-auto md:px-6 md:py-[18px] hover:opacity-70 transition-opacity"
        >
          <span className="relative box-border caret-transparent block leading-[21px] pointer-events-none md:leading-5 md:pointer-events-auto">
            매장 위치
          </span>
        </a>
      </li>
      <li 
        className="relative box-border caret-transparent list-item left-[-5px] opacity-0 pointer-events-none md:static md:flex md:opacity-100 md:pointer-events-auto md:left-auto group"
        onMouseEnter={() => handleMouseEnter("sustainability")}
        onMouseLeave={handleMouseLeave}
      >
        <button className="font-medium [align-items:normal] box-border caret-transparent gap-x-2 flex h-auto justify-between tracking-[1.7px] leading-[21px] list-inside pointer-events-none gap-y-2 p-2.5 md:items-center md:h-full md:leading-5 md:pointer-events-auto md:px-6 md:py-[18px] hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer">
          <span className="relative box-border caret-transparent block leading-[21px] pointer-events-none md:leading-5 md:pointer-events-auto">
            지속 가능성
          </span>
        </button>
        
        {/* Dropdown Menu */}
        <div 
          className={`absolute left-0 top-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out w-screen ${
            activeDropdown === "sustainability" ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
          } hidden md:block z-50`}
        >
          {/* Secondary Navigation Tabs */}
          <div className="border-b border-gray-200">
            <div className="max-w-[1440px] mx-auto px-20">
              <div className="flex gap-x-12 py-4">
                {["올버즈", "스토리", "소식"].map((tab) => (
                  <button
                    key={tab}
                    onMouseEnter={() => setActiveSecondaryTab(tab)}
                    className={`text-sm font-medium pb-2 border-b-2 transition-all duration-200 ${
                      activeSecondaryTab === tab
                        ? "border-black text-black"
                        : "border-transparent text-gray-600 hover:text-black"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Area with Animation */}
          <div className="max-w-[1440px] mx-auto px-20 py-8">
            <div 
              className={`grid grid-cols-4 gap-x-12 gap-y-6 transition-opacity duration-200 ${
                currentContent ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {currentContent?.columns.map((column, idx) => (
                <div key={idx} className="flex flex-col gap-y-3">
                  <h3 className="text-xs font-bold uppercase mb-2 text-gray-500">
                    {column.title}
                  </h3>
                  {column.links.map((link, linkIdx) => (
                    <a
                      key={linkIdx}
                      href={link.href}
                      className="text-sm hover:underline transition-all duration-150"
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              ))}
              
              {/* Image Column */}
              {currentContent?.image && (
                <div className="flex flex-col">
                  <div className="overflow-hidden rounded-lg mb-3 group/image">
                    <img 
                      src={currentContent.image.src}
                      alt={currentContent.image.alt}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover/image:scale-105"
                    />
                  </div>
                  <p className="text-xs text-gray-600">{currentContent.image.caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};
