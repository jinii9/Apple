import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Product card data
const products = [
  {
    title: "iPhone 16 Pro",
    description: "궁극의 iPhone.",
    price: "₩1,550,000부터",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-50-specialist-help-202309?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1701194078821",
    link: "",
    textColor: "#fff",
  },
  {
    title: "Apple Watch Series 10",
    description: "얇아진 두께. 더 커진 존재감.",
    price: "₩599,000부터",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-s10-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1724095131742",
    link: "/kr/shop/buy-watch/apple-watch",
    textColor: "#1d1d1f",
  },
  {
    title: "iPhone 16",
    description: "막강한 성능.",
    price: "₩1,250,000부터",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-16-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725661572506",
    link: "https://www.apple.com/kr/shop/buy-iphone/iphone-16",
    textColor: "#fff",
  },
  {
    title: "Apple Watch Ultra 2",
    description: "블랙으로 계속되는 전력 질주.",
    price: "₩1,149,000부터",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-watch-ultra-202409_GEO_KR?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725655434794",
    link: "/kr/shop/buy-watch/apple-watch-ultra",
    textColor: "#fff",
  },
];

const ShopCardsShelf2 = () => {
  const [containerStyle, setContainerStyle] = useState({});
  const [slidesOffsetBefore, setSlidesOffsetBefore] = useState(0);

  useEffect(() => {
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

    window.addEventListener("resize", handleResize);
    handleResize();

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
                      alt={product.title}
                      className="w-full h-full object-cover rounded-xl" // Added object-cover here
                    />
                  </div>
                  <div
                    className="rf-ccard-content-info w-full p-10 absolute bottom-0"
                    style={{ color: product.textColor }}
                  >
                    <div className="rf-ccard-content-header">
                      <h3 className="text-2xl font-semibold pt-4">
                        {product.title}
                      </h3>
                    </div>
                    <div className="rf-ccard-content-desc">
                      <p className="text-sm pt-3">{product.description}</p>
                      <p className="text-sm pt-2">{product.price}</p>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ShopCardsShelf2;
