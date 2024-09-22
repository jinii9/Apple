import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const products = [
  {
    eyebrow: "APPLE TV+",
    header: "매달 새로운 Apple Original 콘텐츠 감상.°",
    description: "",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/card-50-instigators-202407_GEO_KR?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1719955830106",
    link: "",
    textColor: "#ffffff",
  },
  {
    eyebrow: "",
    header: "네 가지 Apple 서비스. 한 번의 간편한 가입.",
    description: "",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1626375547000",
    link: "",
    textColor: "#1d1d1f",
  },
  {
    eyebrow: "",
    header: "보다 오래 안심할 수 있도록.",
    description:
      "이제 AppleCare+가 우발적인 손상에 대한 수리 서비스를 횟수 제한 없이 제공합니다.",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-applecare-202409?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1723747544269",
    link: "",
    textColor: "#1d1d1f",
  },
  {
    eyebrow: "홈",
    header: "앱 하나로 집안 전체를 관리하는 방법을 알아보세요.  ",
    description: "",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-homekit-202405_GEO_KR?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1715960296048",
    link: "",
    textColor: "#1d1d1f",
  },
];

const ShopCardsShelf6 = () => {
  const [containerStyle, setContainerStyle] = useState({});
  const [slidesOffsetBefore, setSlidesOffsetBefore] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    let calculatedMargin;
    let calculatedOffset;

    if (screenWidth > 1440) {
      calculatedMargin = "140px";
      calculatedOffset = 140;
    } else if (screenWidth >= 1024 && screenWidth <= 1440) {
      calculatedMargin = `calc(-268.46154px + 28.36538vw)`;
      const offsetValue = screenWidth * 0.28 - 268.46154;
      calculatedOffset = Math.max(20, offsetValue);
    } else {
      calculatedMargin = "20px";
      calculatedOffset = 20;
    }

    setContainerStyle({ marginLeft: calculatedMargin });
    setSlidesOffsetBefore(calculatedOffset);
  };

  useEffect(() => {
    handleResize();
    setIsReady(true);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="relative w-auto" style={containerStyle}>
        <div className="w-4/5 flex-col text-lg lg:text-2xl font-bold mb-3">
          <h2 className="inline-block">Apple 경험.</h2>
          <span className="text-gray-500">
            Apple 제품 및 서비스로 더욱더 많은 걸 누리다.
          </span>
        </div>
      </div>
      {isReady && (
        <div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            pagination={{ clickable: true }}
            slidesOffsetBefore={slidesOffsetBefore}
            slidesOffsetAfter={40}
            className="h-[500px] lg:h-[550px]"
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                className="lg:p-3 w-[309px] h-[450px] lg:w-[480px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105"
              >
                <div className="w-[309px] h-[450px] lg:w-[480px] lg:h-[500px] rounded-xl relative shadow-lg">
                  <a href={product.link} className="block h-full w-full">
                    <div className="rf-ccard-img-full-wrapper h-full w-full">
                      <img
                        src={product.imageUrl}
                        alt={product.header}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div
                      className="rf-ccard-content-info w-full p-4 lg:p-10 absolute top-0"
                      style={{ color: product.textColor }}
                    >
                      {/* eyeborw 조건부 height 조절 */}
                      {product.eyebrow ? (
                        <p className="text-xs md:text-sm">{product.eyebrow}</p>
                      ) : (
                        <div className="h-[20px] md:h-0"></div> 
                      )}
                      <div className="rf-ccard-content-header">
                        <h3 className="text-xl md:text-2xl font-semibold pt-4">
                          {product.header}
                        </h3>
                      </div>
                      <div className="rf-ccard-content-desc">
                        <p className="text-sm pt-3 font-bold text-gray-500">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ShopCardsShelf6;
