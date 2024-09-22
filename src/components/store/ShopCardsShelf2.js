import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Product card data
const products = [
  {
    eyebrow: "APPLE 스페셜리스트",
    header: "스페셜리스트와 함께하는 일대일 쇼핑. 온라인에서도 매장에서도.",
    description: "",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821",
    link: "",
    textColor: "#1d1d1f",
  },
  {
    eyebrow: "TODAY AT APPLE",
    header: "Apple Store의 무료 세션에 참여해 보세요.",
    description:
      "최신 기능과 더불어 Apple 기기를 더욱 심도 있게 활용하는 법을 알아보세요.",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145",
    link: "",
    textColor: "#1d1d1f",
  },
];

const combinedProducts = [
  {
    eyebrow: "",
    header:
      "무료 온라인 개인 맞춤 세션에서 새 기기를 설정하는 방법을 배워보세요.",
    description: "",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-25-apps-202108?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=1626223748000",
    link: "",
    textColor: "#1d1d1f",
  },
  {
    eyebrow: "",
    header: "Genius Bar에서 직접 전문가의 도움을 받을 수 있습니다.",
    description: "",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-25-genius-202108?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=1626384443000",
    link: "",
    textColor: "#1d1d1f",
  },
];

const ShopCardsShelf2 = () => {
  const [containerStyle, setContainerStyle] = useState({});
  const [slidesOffsetBefore, setSlidesOffsetBefore] = useState(0);
  const [isReady, setIsReady] = useState(false); // New state for conditional rendering

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
    // Initial call to set the offset
    handleResize();
    setIsReady(true); // Set Swiper as ready once the initial setup is done

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="relative w-auto" style={containerStyle}>
        <div className="w-4/5 flex-col text-lg lg:text-2xl font-bold mb-3">
          <h2 className="inline-block">도움의 손길.</h2>
          <span className="text-gray-500">언제든, 당신에게 맞는 방식으로.</span>
        </div>
      </div>
      {isReady && ( // Conditional rendering based on isReady state
        <div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            pagination={{ clickable: true }}
            slidesOffsetBefore={slidesOffsetBefore}
            className="h-[500px] lg:h-[600px]"
          >
            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                className="lg:p-3 w-[309px] h-[450px] lg:w-[480px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105"
              >
                <div className="rounded-xl h-full w-full relative">
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
                      <div className="text-xs font-bold text-gray-500">
                        <p>{product.eyebrow}</p>
                      </div>
                      <div className="rf-ccard-content-header">
                        <h3 className="text-xl font-semibold pt-4">
                          {product.header}
                        </h3>
                      </div>
                      <div className="rf-ccard-content-desc">
                        <p className="text-sm pt-3 font-bold">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}

            {/* Combined products in one SwiperSlide */}
            <SwiperSlide
              key="combined"
              className="lg:p-3 w-[309px] h-[450px] lg:w-[480px] lg:h-[500px]"
            >
              <div className="flex flex-col space-y-5 lg:space-y-2">
                <div className="rounded-xl h-[215px] lg:h-[235px] w-full relative bg-white shadow-lg transform transition duration-500 lg:hover:scale-105">
                  <a
                    href={combinedProducts[0].link}
                    className="block h-full w-full"
                  >
                    <div className="rf-ccard-img-full-wrapper h-full w-full">
                      <img
                        src={combinedProducts[0].imageUrl}
                        alt={combinedProducts[0].header}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div
                      className="rf-ccard-content-info w-full p-4 lg:p-10 absolute top-0"
                      style={{ color: combinedProducts[0].textColor }}
                    >
                      <div className="rf-ccard-content-header">
                        <h3 className="text-xl font-bold">
                          {combinedProducts[0].header}
                        </h3>
                      </div>
                      <div className="rf-ccard-content-desc">
                        <p className="text-sm pt-2">
                          {combinedProducts[0].description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="rounded-xl h-[215px] lg:h-[235px] w-full relative bg-white shadow-lg transform transition duration-500 lg:hover:scale-105">
                  <a
                    href={combinedProducts[1].link}
                    className="block h-full w-full"
                  >
                    <div className="rf-ccard-img-full-wrapper h-full w-full">
                      <img
                        src={combinedProducts[1].imageUrl}
                        alt={combinedProducts[1].header}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div
                      className="rf-ccard-content-info w-3/5 p-4 lg:p-10 absolute top-2"
                      style={{ color: combinedProducts[1].textColor }}
                    >
                      <div className="rf-ccard-content-header">
                        <h3 className="text-xl font-bold">
                          {combinedProducts[1].header}
                        </h3>
                      </div>
                      <div className="rf-ccard-content-desc">
                        <p className="text-sm pt-2">
                          {combinedProducts[1].description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ShopCardsShelf2;
