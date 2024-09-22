import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useResizeHandler } from "../hooks/useResizeHandler";

const products = [
  {
    title: "AirPods Pro 2",
    price: "₩349,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1724041669458",
    link: "https://www.apple.com/kr/shop/product/MTJV3KH/A",
    badge: "무료 각인",
    colors: [], 
  },
  {
    title: "Beats Studio Buds + 진정한 무선 노이즈 캔슬링 이어버드",
    price: "₩229,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLK3?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1682361480894",
    link: "https://www.apple.com/kr/shop/product/MQLK3ZP/A/beats-studio-buds-%EC%A7%84%EC%A0%95%ED%95%9C-%EB%AC%B4%EC%84%A0-%EB%85%B8%EC%9D%B4%EC%A6%88-%EC%BA%94%EC%8A%AC%EB%A7%81-%EC%9D%B4%EC%96%B4%EB%B2%84%EB%93%9C-%ED%88%AC%EB%AA%85",
    badge: "", 
    colors: [
      {
        name: "투명",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLK3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1682985972906",
      },
      {
        name: "블랙 / 골드",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1682361466573",
      },
      {
        name: "아이보리",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLJ3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1693952267374",
      },
    ],
  },
  {
    title: "AirPods Max - 미드나이트",
    price: "₩769,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1724927451276",
    link: "https://www.apple.com/kr/shop/product/MWW43KH/A/%EB%AF%B8%EB%93%9C%EB%82%98%EC%9D%B4%ED%8A%B8",
    badge: "무료 각인",
    colors: [
      {
        name: "블루",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-blue_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724046212237",
      },
      {
        name: "퍼플",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-purple_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724047056470",
      },
      {
        name: "미드나이트",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-midnight_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724047056495",
      },
      {
        name: "스타라이트",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-starlight_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724047423112",
      },
      {
        name: "오렌지",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-max-select-202409-orange_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1724047056468",
      },
    ],
  },
  {
    title: "Beats Pill — 무선 Bluetooth® 스피커 — 샴페인 골드",
    price: "₩219,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MW463?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1716251412721",
    link: "https://www.apple.com/kr/shop/product/MW463ZP/A/beats-pill-%EB%AC%B4%EC%84%A0-bluetooth-%EC%8A%A4%ED%94%BC%EC%BB%A4-%EC%83%B4%ED%8E%98%EC%9D%B8-%EA%B3%A8%EB%93%9C",
    badge: "New",
    colors: [
      {
        name: "매트 블랙",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MW443_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1716251399673",
      },
      {
        name: "볼드 레드",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWQW3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1716251399672",
      },
      {
        name: "샴페인 골드",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MW463_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1716251399673",
      },
    ],
  },
  {
    title: "Beats Solo 4 — 온이어 Wireless 헤드폰 – 클라우드 핑크",
    price: "₩269,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW33?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1712255584823",
    link: "https://www.apple.com/kr/shop/product/MUW33ZP/A/beats-solo-4-%EC%98%A8%EC%9D%B4%EC%96%B4-wireless-%ED%97%A4%EB%93%9C%ED%8F%B0-%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C-%ED%95%91%ED%81%AC",
    badge: "New",
    colors: [
      {
        name: "매트 블랙",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW23_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1712255582741",
      },
      {
        name: "슬레이트 블루",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW43_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1712255582735",
      },
      {
        name: "클라우드 핑크",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW33_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1712255582736",
      },
    ],
  },
  {
    title: "Beats Solo Buds — 진정한 무선 이어버드 — 클리어 레드",
    price: "₩109,000",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW03?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1713296134821",
    link: "https://www.apple.com/kr/shop/product/MUW03ZP/A/beats-solo-buds-%EC%A7%84%EC%A0%95%ED%95%9C-%EB%AC%B4%EC%84%A0-%EC%9D%B4%EC%96%B4%EB%B2%84%EB%93%9C-%ED%81%B4%EB%A6%AC%EC%96%B4-%EB%A0%88%EB%93%9C",
    badge: "New",
    colors: [
      {
        name: "매트 블랙",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUVW3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1713296131061",
      },
      {
        name: "스톰 그레이",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUVY3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1713296131297",
      },
      {
        name: "아이스 퍼플",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUVX3_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1713298072981",
      },
      {
        name: "클리어 레드",
        imageUrl:
          "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW03_SW_COLOR?wid=64&hei=64&fmt=jpeg&qlt=90&.v=1713296131090",
      },
    ],
  },
];


const ShopCardsShelf5 = () => {
  const { containerStyle, slidesOffsetBefore, isReady } = useResizeHandler();

  return (
    <>
      <div className="relative w-auto" style={containerStyle}>
        <div className="w-full flex-col text-lg lg:text-2xl font-bold mb-3">
          <h2 className="inline-block">생생하게 들리는 차이.</h2>
          <span className="text-gray-500">
            풍부한 고품질 사운드를 원한다면 필연적인 선택.
          </span>
        </div>
      </div>
      {isReady && (
        <div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            pagination={{ clickable: true }}
            slidesOffsetBefore={slidesOffsetBefore} // Apply offset after ready
            slidesOffsetAfter={40}
            className="h-[480px] lg:h-[550px]"
          >
            <SwiperSlide className="lg:p-3 w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105">
              <div className="w-[309px] h-[450px] lg:w-[400px] lg:h-[500px]rounded-xl shadow-lg">
                <div className="flex flex-row">
                  <div className="rf-ccard-img-full-wrapper">
                    <img
                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-40-applemusic-202110?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1633644705000"
                      alt="이미지"
                      className="w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl"
                    />
                  </div>
                  <div className="rf-ccard-content-info w-full p-10 absolute text-black">
                    <div className="rf-ccard-content-header">
                      <h3 className="text-2xl font-semibold pt-4">
                        Apple Music 3개월 무료 이용 혜택.
                      </h3>
                    </div>
                    <div className="rf-ccard-content-desc">
                      <p className="text-sm pt-3">
                        해당 Apple 기기 구입 시 혜택 제공.<sup>+</sup>
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
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ShopCardsShelf5;
