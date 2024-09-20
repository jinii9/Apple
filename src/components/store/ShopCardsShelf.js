import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const products = [
  {
    title: "Mac",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666",
    link: "/kr/shop/buy-mac",
  },
  {
    title: "iPhone",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723857138230",
    link: "/kr/shop/buy-iphone",
  },
  {
    title: "iPad",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=1714168620875",
    link: "/kr/shop/buy-ipad",
  },
  {
    title: "Apple Watch",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838",
    link: "/kr/shop/buy-watch",
  },
  {
    title: "AirPods",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822",
    link: "https://www.apple.com/kr/airpods",
  },
  {
    title: "AirTag",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000",
    link: "/kr/shop/accessories/all/airtag",
  },
  {
    title: "Apple TV 4K",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484",
    link: "/kr/shop/tv",
  },
  {
    title: "액세서리",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1723738892174",
    link: "/kr/shop/accessories/all",
  },
];

const StoreCardsShelf = () => {
  const [containerStyle, setContainerStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1440) {
        setContainerStyle({ marginLeft: "140px" });
      } else if (screenWidth >= 1024 && screenWidth <= 1440) {
        const marginLeft = `calc(-268.46154px + 28.36538vw)`;
        setContainerStyle({ marginLeft });
      } else {
        setContainerStyle({ marginLeft: "20px" });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="min-h-[196px] relative w-auto overflow-x-visible"
      style={containerStyle}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={0}
        pagination={{ clickable: true }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <div className="rf-cards-scroller-itemview text-center">
              <div className="rf-productnav-card-content rounded-[18px] box-border w-[136px] h-[150px] overflow-hidden p-[18px_8px_16px]">
                <div className="rf-productnav-card-image mb-2">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
                <div className="rf-productnav-card-info">
                  <a
                    href={product.link}
                    className="rf-productnav-card-title text-lg font-semibold text-gray-800 hover:text-blue-500"
                  >
                    {product.title}
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StoreCardsShelf;
