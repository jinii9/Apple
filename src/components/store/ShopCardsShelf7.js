import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const products = [
  {
    eyebrow: "교육",
    header: "교육 할인가로 새로운 iPad 또는 Mac을 더 부담 없이.³",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202406?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1716334899885",
    link: "",
    eyebrowColor: "#1d1d1f",
    textColor: "#1d1d1f",
  },
  {
    eyebrow: "비즈니스",
    header: "대기업부터 중소기업까지 Apple이 함께합니다.³",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-card-40-business-202409_GEO_KR?wid=800&hei=1000&fmt=jpeg&qlt=95&.v=1724793636533",
    link: "",
    eyebrowColor: "#86868b",
    textColor: "#ffffff",
  },
  {
    eyebrow: "인증 리퍼비쉬 제품",
    header: "1년 보증이 제공되는 리퍼비쉬 Apple 제품을 쇼핑하세요.",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-refurb-202408_GEO_KR?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1722037990131",
    link: "",
    eyebrowColor: "#626273",
    textColor: "#1d1d1f",
  },
];

const ShopCardsShelf7 = () => {
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
          <h2 className="inline-block">특별 할인.</h2>
          <span className="text-gray-500">
            비즈니스, 학교 등을 위한 혜택.
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
                className="lg:p-3 w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105"
              >
                <div className="w-[309px] h-[450px]  lg:w-[400px] lg:h-[500px] rounded-xl relative shadow-lg">
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
                        <p className="text-xs font-bold" style={{color:product.eyebrowColor}}>{product.eyebrow}</p>
                      ) : (
                        <div className="h-[20px] md:h-0"></div> 
                      )}
                      <div className="rf-ccard-content-header">
                        <h3 className="text-xl md:text-2xl font-semibold pt-4">
                          {product.header}
                        </h3>
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

export default ShopCardsShelf7;
