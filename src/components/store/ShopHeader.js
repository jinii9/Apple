import React, { useEffect, useState } from "react";

import chatImage from "../../assets/images/store/chat-icon.jpeg";
import nearImage from "../../assets/images/store/apple-gps-icon.jpg";

function ShopHeader() {
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
      className="mx-[22px] min-h-[196px] relative w-auto lg:mx-[140px]"
      style={containerStyle}
    >
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:relative">
        {/* Header section */}
        <div className="shop-header-section md:col-span-8 max-w-[640px] py-[80px] pb-[64px]">
          <h1 className="rs-shop-header text-[32px] md:text-[48px] font-semibold leading-[1.0835] tracking-tight inline text-black">
            스토어.
          </h1>
          <div className="rs-shop-subheader text-[32px] md:text-[48px] font-semibold leading-[1.0835] tracking-tight inline text-gray-500">
            좋아하는 Apple 제품을 구입하는 가장 좋은 방법.
          </div>
        </div>

        <div className="shop-chatstore-section md:col-span-4 md:absolute md:right-0 flex flex-col justify-end md:py-[90px] md:pb-[74px] mt-0">
          <div id="generic-2">
            {/* Chat section */}
            <div className="rf-shop-chat-section flex flex-row text-[14px] font-normal leading-[1.4286] tracking-tight pb-4">
              <div className="rf-shop-chaticon-container w-[36px] h-[36px] mr-2 ">
                <img
                  src={chatImage}
                  alt="chat"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="rf-shop-chat-container">
                <div className="rf-shop-chat-title font-bold">
                  쇼핑 지원이 필요하다면?
                </div>
                <div className="rf-shop-chat-content text-blue-400 cursor-pointer hover:underline">
                  스페셜리스트에게 문의하세요 ↗
                </div>
              </div>
            </div>

            {/* Nearest store section */}
            <div className="rs-shop-neareststore flex flex-row text-[14px] font-normal leading-[1.4286] tracking-tight pb-4">
              <div className="rf-shop-storeicon-container w-[36px] h-[36px] mr-2">
                <img
                  src={nearImage}
                  alt="nearest store"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-bold">Apple Store를 방문하세요</div>
                <div className=" text-blue-400 cursor-pointer hover:underline">
                  가까운 매장 찾기 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopHeader;
