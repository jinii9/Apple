import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useResizeHandler } from "../hooks/useResizeHandler";
import { productList } from "../../data/productList"; // Import the productList
import { useNavigate } from "react-router-dom"; // React Router's useNavigate

const ShopCardsShelf4 = () => {
  const { containerStyle, slidesOffsetBefore, isReady } = useResizeHandler();
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle click event and navigate to product page
  const handleOnClick = (productId) => {
    navigate(`/store/product/${productId}`);
    window.scroll(0, 0);  // Initialize the scroll position on navigating to product page  
  };

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
            <SwiperSlide
              className="lg:p-3 w-[309px] h-[450px] lg:w-[400px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105"
              onClick={() => handleOnClick("special-slide")}
            >
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

            {productList.map((product, index) => (
              <SwiperSlide
                key={product.id}
                className="lg:p-3 w-[309px] h-[450px] lg:w-[313px] lg:h-[500px] rounded-xl transform transition duration-500 lg:hover:scale-105"
                onClick={() => handleOnClick(product.id)} // Use handleOnClick on each product
              >
                <div className="lg:p-3 w-[309px] h-[450px] lg:w-[313px] lg:h-[500px] rounded-xl shadow-lg bg-white">
                  <div className="flex-col pt-10">
                    <div className="flex justify-center h-[230px]">
                      <img
                        src={product.img[0]?.url}
                        alt={product.product_name}
                      />
                    </div>
                    <div className="rf-ccard-content-info w-full p-4">
                      {/* Swatch colors */}
                      <div className="flex justify-center items-center mb-4 h-[15px] md:h-[40px]">
                        <ul
                          className="rf-recommcard-content-swatchescontainer flex gap-2"
                          aria-label={`${product.product_name} 선택 가능한 색상`}
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
                          {product.product_name}
                        </h3>
                      </div>
                      <div className="rf-ccard-content-desc">
                        <p className="text-sm pt-3">₩{product.price}</p>
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
