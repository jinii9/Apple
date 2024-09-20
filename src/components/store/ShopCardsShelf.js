import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// Product card data (based on the HTML structure provided)
const products = [
  {
    title: "iPhone 16 Pro",
    description: "궁극의 iPhone.",
    price: "₩1,550,000부터",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-iphone-16-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1726165763242",
    link: "https://www.apple.com/kr/shop/buy-iphone/iphone-16-pro",
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
  {
    title: "AirPods 4",
    description: "아이콘의 귀환. 사운드의 진화.",
    price: "AirPods4 ₩199,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-airpods-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1722974321259",
    link: "/kr/shop/buy-airpods/airpods-4",
    textColor: "#1d1d1f",
  },
  {
    title: "AirPods 2",
    description: "사운드의 신기원.",
    price: "₩349,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-airpods-pro-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1722974321164",
    link: "/kr/shop/buy-airpods/airpods-4",
    textColor: "#fff",
  },
  {
    title: "AirPods Max",
    description: "새로운 5가지 색상. 풍성한 사운드",
    price: "₩769,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-airpods-max-202409?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1725895773753",
    link: "/kr/shop/buy-airpods/airpods-4",
    textColor: "#1d1d1f",
  },
  {
    title: "MacBook Air",
    description: "어디서나 종횡무진할 수 있도록.",
    price: "₩1,390,000부터",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595",
    link: "/kr/shop/buy-airpods/airpods-4",
    textColor: "#1d1d1f",
  },
  {
    title: "iPad Air",
    description: "새바람이 불다.",
    price: "₩899,000부터",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-air-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=1713308272877",
    link: "/kr/shop/buy-airpods/airpods-4",
    textColor: "#1d1d1f",
  },
  {
    title: "MacBook Pro",
    description: "비교 불가 성능. 시선 강탈 매력.",
    price: "₩2,390,000부터",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-macbook-pro-202310?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1696964122967",
    link: "/kr/shop/buy-airpods/airpods-4",
    textColor: "#1d1d1f",
  },

  {
    title: "iPad Pro",
    description: "불가능이란 얇다.",
    price: "₩1,499,000부터",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-ipad-pro-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1713308272816",
    link: "/kr/shop/buy-airpods/airpods-4",
    textColor: "#fff",
  },
];
const ShopCardsShelf = () => {
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
        <div className="flex text-lg lg:text-2xl font-bold mb-3">
          <h2>최신 제품.</h2>
          <span className="text-gray-500">따끈따끈한 신제품 이야기</span>
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
              className="lg:p-3 w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105"
            >
              <div className="rounded-xl">
                <a href={product.link} className="block">
                  <div className="flex flex-row">
                    <div className="rf-ccard-img-full-wrapper">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl"
                      />
                    </div>
                    <div
                      className="rf-ccard-content-info w-full p-10 absolute"
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

export default ShopCardsShelf;
