import React, { useEffect, useState } from "react";

function ShopCardsNavFooter() {
  const [containerStyle, setContainerStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024 && screenWidth <= 1440) {
        const marginInline = `calc(-268.46154px + 28.36538vw)`;
        setContainerStyle({ marginInline });
      } else {
        setContainerStyle({}); // 범위를 벗어나면 Reset
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="mx-[22px] min-h-[196px] relative w-auto lg:mx-[140px] lg:mt-10"
      style={containerStyle}
    >
      <div>
        <h1 className="text-2xl font-bold">빠른 링크</h1>
      </div>

      {/* 버튼 리스트 */}
      <div className="flex space-x-4 mt-6">
        <button className="px-4 py-2 border border-black rounded-full text-sm hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
          주문 상태
        </button>
        <button className="px-4 py-2 border border-black rounded-full text-sm hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
          쇼핑 도움말
        </button>
        <button className="px-4 py-2 border border-black rounded-full text-sm hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
          반품
        </button>
        <button className="px-4 py-2 border border-black rounded-full text-sm hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
          관심 목록
        </button>
      </div>
    </div>
  );
}

export default ShopCardsNavFooter;
