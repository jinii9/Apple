import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const products = [
  {
    title: "MagSafe형 iPhone 16 Pro 투명 케이스",
    price: "₩69,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7E4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723930332796",
    link: "https://www.apple.com/kr/shop/product/MA7E4FE/A/magsafe%ED%98%95-iphone-16-pro-%ED%88%AC%EB%AA%85-%EC%BC%80%EC%9D%B4%EC%8A%A4",
    badge: "New",
    colors: [], 
  },
  {
    title: "46mm 플럼 스포츠 루프",
    price: "₩65,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL63?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724186591572",
    link: "https://www.apple.com/kr/shop/product/MA7E4FE/A/magsafe%ED%98%95-iphone-16-pro-%ED%88%AC%EB%AA%85-%EC%BC%80%EC%9D%B4%EC%8A%A4",
    badge: "New",
    colors: [
      {
        name: "울트라마린",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL73_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724298866568",
      },
      {
        name: "레이크 그린",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL83_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724298868354",
      },
      {
        name: "블루 클라우드",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL53_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724298870467",
      },
      {
        name: "잉크",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL33ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724298870486",
      },
      {
        name: "플럼",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL63_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724298866591",
      },
    ],
  },
  {
    title: "49mm 블랙 티타늄 밀레니즈 루프 - M",
    price: "₩285,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXKF3ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723919328571",
    link: "https://www.apple.com/kr/shop/product/MA7E4FE/A/magsafe%ED%98%95-iphone-16-pro-%ED%88%AC%EB%AA%85-%EC%BC%80%EC%9D%B4%EC%8A%A4",
    badge: "New",
    colors: [
      {
        name: "내추럴",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXKC3ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1724284017035",
      },
      {
        name: "블랙",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXKF3ref_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1724284014784",
      },
    ],
  },
  {
    title: "MacSafe형 iPhone 16 실리콘 케이스 - 울트라마린",
    price: "₩69,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MYY63?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723236736369",
    link: "https://www.apple.com/kr/shop/product/MA7E4FE/A/magsafe%ED%98%95-iphone-16-pro-%ED%88%AC%EB%AA%85-%EC%BC%80%EC%9D%B4%EC%8A%A4",
    badge: "New",
    colors: [
      {
        name: "울트라마린",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL73_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724298866568",
      },
      {
        name: "레이크 그린",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXL83_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724298868354",
      },
    ],
  },
  {
    title: "MacSafe형 iPhone 파인우븐 카드지갑 - 딥 블루",
    price: "₩85,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA6X4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723573541193",
    link: "https://www.apple.com/kr/shop/product/MA7E4FE/A/magsafe%ED%98%95-iphone-16-pro-%ED%88%AC%EB%AA%85-%EC%BC%80%EC%9D%B4%EC%8A%A4",
    badge: "New",
    colors: [
      {
        name: "다크 그린",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA6Y4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690482379",
      },
      {
        name: "블랙",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA6W4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690482358",
      },
      {
        name: "딥 블루",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA6X4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690482434",
      },
      {
        name: "블랙베리",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7A4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1723690482371",
      },
    ],
  },
  {
    title: "AirTag 파인우브 키링 - 샤르트뢰즈",
    price: "₩58,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7L4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1723856728705",
    link: "https://www.apple.com/kr/shop/product/MA7E4FE/A/magsafe%ED%98%95-iphone-16-pro-%ED%88%AC%EB%AA%85-%EC%BC%80%EC%9D%B4%EC%8A%A4",
    badge: "New",
    colors: [
      {
        name: "다크 그린",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7J4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1723690618119",
      },
      {
        name: "블랙",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7G4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1723690617884",
      },
      {
        name: "딥 블루",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7H4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1723690617898",
      },
      {
        name: "샤르트뢰즈",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7L4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1723690617884",
      },
      {
        name: "블랙베리",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MA7K4_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=95&.v=1723690617883",
      },
    ],
  },
  {
    title: "Apple Pencil Pro",
    price: "₩195,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1713841707336",
    link: "https://www.apple.com/kr/shop/product/MA7E4FE/A/magsafe%ED%98%95-iphone-16-pro-%ED%88%AC%EB%AA%85-%EC%BC%80%EC%9D%B4%EC%8A%A4",
    badge: "",
    colors: [], 
  },
  {
    title: "iPad Pro 13(M4 모델)용 Magic Keyboard - 한국어 - 블랙",
    price: "₩519,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWR53KH?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1713934300032",
    link: "https://www.apple.com/kr/shop/product/MA7E4FE/A/magsafe%ED%98%95-iphone-16-pro-%ED%88%AC%EB%AA%85-%EC%BC%80%EC%9D%B4%EC%8A%A4",
    badge: "",
    colors: [
      {
        name: "화이트",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWR43J_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1713909203103",
      },
      {
        name: "블랙",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWR53KH_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1713909233955",
      },
    ],
  },
];

const ShopCardsShelf4 = () => {
  const [containerStyle, setContainerStyle] = useState({});
  const [slidesOffsetBefore, setSlidesOffsetBefore] = useState(0);
  const [isReady, setIsReady] = useState(false);

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

    handleResize(); 
    setIsReady(true); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="relative w-auto" style={containerStyle}>
        <div className="w-full flex-col text-lg lg:text-2xl font-bold mb-3">
          <h2 className="inline-block">액세서리.</h2>
          <span className="text-gray-500">
            즐겨 사용하는 기기들과 완벽하게 페어링되는 여러 가지 필수품.
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
            className="h-[480px] lg:h-[550px]"
          >
            <SwiperSlide className="lg:p-3 w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105">
              <div className="w-[309px] h-[450px] lg:w-[400px] lg:h-[500px]rounded-xl shadow-lg">
                <div className="flex flex-row">
                  <div className="rf-ccard-img-full-wrapper">
                    <img
                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-accessories-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1723822259651"
                      alt="이미지"
                      className="w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl"
                    />
                  </div>
                  <div className="rf-ccard-content-info w-full p-10 absolute text-black">
                    <div className="rf-ccard-content-header">
                      <h3 className="text-2xl font-semibold pt-4">
                        새로움을 입다.
                      </h3>
                    </div>
                    <div className="rf-ccard-content-desc">
                      <p className="text-sm pt-3">
                        당신의 최애 액세서리들. 이제 대담한 새 색상, 그리고
                        혁신적인 신기능과 함께.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {products.map((product, index) => (
              <SwiperSlide
                key={index}
                className="lg:p-3 w-[309px] h-[450px] lg:w-[313px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105"
              >
                <div className="lg:p-3 w-[309px] h-[450px] lg:w-[313px] lg:h-[500px] rounded-xl shadow-lg bg-white">
                  <div className="flex-col pt-10">
                    <div className="flex justify-center h-[230px]">
                      <img src={product.imageUrl} alt={product.title} />
                    </div>
                    <div className="rf-ccard-content-info w-full p-4">
                      {/* Swatch colors */}
                      <div className="flex justify-center items-center mb-4 h-[15px] md:h-[40px]">

                        <ul
                          className="rf-recommcard-content-swatchescontainer flex gap-2"
                          aria-label={`${product.title} 선택 가능한 색상`}
                          role="list"
                        >
                          {product.colors.map((color, colorIndex) => (
                            <li
                              key={colorIndex}
                              className="rf-recommcard-content-colorimage"
                            >
                              <img
                                width="12"
                                height="12"
                                alt={color.name}
                                src={color.imageUrl}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="h-[20px]">
                        <span className="text-sm text-orange-600">
                          {product.badge}
                        </span>
                      </div>
                      <div className="rf-ccard-content-header">
                        <h3 className="text-lg font-semibold pt-1">
                          {product.title}
                        </h3>
                      </div>
                      <div className="rf-ccard-content-desc">
                        <p className="text-sm pt-3">{product.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide className="lg:p-3 w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105">
              <div className="rounded-xl shadow-lg">
                <div className="flex flex-row">
                  <div className="rf-ccard-img-full-wrapper">
                    <img
                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-accessories-explore-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1724087949039"
                      alt="이미지"
                      className="w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl"
                    />
                  </div>
                  <div className="rf-ccard-content-info w-full p-10 absolute text-black">
                    <div className="rf-ccard-content-header">
                      <h3 className="text-2xl font-semibold md:pt-4">
                        모든 액세서리를 살펴보세요.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ShopCardsShelf4;
