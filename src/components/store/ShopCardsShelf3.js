import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ReactComponent as Svg1 } from "../../assets/images/store/1.svg";
import { ReactComponent as Svg2 } from "../../assets/images/store/2.svg";
import { ReactComponent as Svg3 } from "../../assets/images/store/3.svg";
import { ReactComponent as Svg4 } from "../../assets/images/store/4.svg";
import { ReactComponent as Svg5 } from "../../assets/images/store/5.svg";
import { ReactComponent as Svg6 } from "../../assets/images/store/6.svg";

const gradientTextStyle = {
  background:
    "linear-gradient(to right, #ff7e5f, #feb47b, #ff6b6b, #5f2c82, #9c27b0, #7e57c2,#759cea,  #6cafcb, #67c3ae, #6ed59c)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline",
};

const products = [
  {
    title: (
      <>
        기분 좋은 결제 옵션.<sup>2</sup>
      </>
    ),
    SvgComponent: Svg1,
    textColor: "#68cc45",
  },
  {
    title: (
      <>
        <span style={{ color: "#007aff" }}>쓰던 기기를 보상 판매하고</span> 새
        기기를 더 저렴하게.<sup>1</sup>
      </>
    ),
    SvgComponent: Svg2,
    textColor: "#007aff",
  },
  {
    title: (
      <>
        간편한 무료 배송. 매장 보유 제품은{" "}
        <span style={{ fontWeight: "bold" }}>Apple Store</span>에서 직접 픽업
        가능.
      </>
    ),
    SvgComponent: Svg3,
    textColor: "#68cc45",
  },
  {
    title: (
      <>
        <span style={{ color: "#007aff" }}>맞춤형 쇼핑</span>을{" "}
        <span style={{ color: "#007aff" }}>Apple Store 앱</span>에서 경험하세요.
      </>
    ),
    SvgComponent: Svg4,
    textColor: "#007aff",
  },
  {
    title: (
      <>
        자신만의 것이라는 증표.{" "}
        <span style={{ color: "#ac39ff" }}>
          무료로 조합해서 새기는 이모티콘, 이름, 숫자.
        </span>
      </>
    ),
    SvgComponent: Svg5,
    textColor: "#ac39ff",
  },
  {
    title: (
      <>
        {/* Apply gradient to these spans */}
        Mac을 <span style={gradientTextStyle}>맞춤 구성</span>하고,
        <br />
        <span className="gradient-text">Apple Watch</span>를 당신만의 스타일로.
      </>
    ),
    SvgComponent: Svg6,
    textColor: "#1d1d1f",
  },
];

const ShopCardsShelf3 = () => {
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
        <div className="w-full flex-col text-lg lg:text-2xl font-bold mb-3">
          <h2 className="inline-block">남다른 Apple Store.</h2>
          <span className="text-gray-500">
            이곳에서 쇼핑해야 하는 더욱더 많은 이유.
          </span>
        </div>
      </div>
      <div>
        <Swiper
          slidesPerView="auto"
          spaceBetween={20}
          pagination={{ clickable: true }}
          slidesOffsetBefore={slidesOffsetBefore}
          className="h-[250px] lg:h-[300px]"
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              className="lg:p-3 w-[309px] h-[215px] lg:w-[313px] lg:h-[240px] rounded-xl transform transition duration-500 lg:hover:scale-105 bg-white shadow-lg"
            >
              <div className="rounded-xl">
                <a href={product.link} className="block">
                  <div className="flex flex-col items-center justify-center p-4">
                    {/* SVG Container */}
                    <div className="svg_container w-full flex items-center justify-start mb-4">
                      {/* SVG component */}
                      <product.SvgComponent
                        width="40px"
                        height="56px"
                        fill={product.textColor}
                      />
                    </div>
                    {/* Title and Description */}
                    <div className="rf-ccard-content-info w-full">
                      <div className="rf-ccard-content-header">
                        <h3 className="text-xl font-semibold">
                          {product.title}
                        </h3>
                      </div>
                      <div className="rf-ccard-content-desc">
                        <p className="text-sm pt-3">{product.description}</p>
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

export default ShopCardsShelf3;
