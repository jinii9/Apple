import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productList } from "../../data/productList";
import { addComma } from "../../utils/priceFormat";

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-6 z-10 bg-gray02 p-2 rounded-full cursor-pointer hidden md:flex"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="md:w-9 md:h-9 text-gray-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute -right-6 z-10 bg-gray02 p-2 rounded-full cursor-pointer hidden md:flex"
    style={{ top: "50%", transform: "translateY(-50%)" }}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="md:w-9 md:h-9 text-gray-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
);

function RecommandationCarousel() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);

  const sliderRef = useRef(null);
  const totalSlides = 9;

  // 섞인 상품 목록을 state로 저장
  const [shuffledProductList, setShuffledProductList] = useState([]);

  // 컴포넌트가 처음 렌더링될 때 상품 목록을 섞어 state에 저장합니다.
  useEffect(() => {
    const shuffledList = [...productList].sort(() => Math.random() - 0.5);
    setShuffledProductList(shuffledList);
  }, []);

  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          width: "100%",
          height: "px",
          position: "relative",
          marginTop: "74px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex + 3);
    },
    nextArrow: showNextArrow ? <NextArrow /> : null,
    prevArrow: showPrevArrow ? <PrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipeToSlide: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          swipeToSlide: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (currentIndex === 0) {
      setShowPrevArrow(false);
    } else {
      setShowPrevArrow(true);
    }

    if (currentIndex >= totalSlides - 1) {
      setShowNextArrow(false);
    } else {
      setShowNextArrow(true);
    }
  }, [currentIndex]);

  // 상품을 클릭하면 해당 상품으로 라우팅합니다.
  const handleProductClick = (index) => {
    navigate(`/store/product/${index}`);
    window.scroll(0, 0);
  };

  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto">
        <div className="pb-10">
          <h2
            className="flex justify-center items-center font-bold"
            style={{ fontSize: "36px", padding: "54px 0 60px 0" }}
          >
            마음에 들 만한 액세서리
          </h2>
          <div
            style={{ fontSize: "17px", textAlign: "center", margin: "0 26px" }}
          >
            <Slider {...settings} ref={sliderRef}>
              {shuffledProductList.slice(0, 9).map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer group"
                  onClick={() => handleProductClick(product.id)}
                >
                  <div
                    style={{
                      width: "194px",
                      height: "194px",
                      margin: "0 auto",
                    }}
                  >
                    <img src={product.img[0].url} alt="" />
                  </div>
                  <div className="flex-col justify-center items-center">
                    <div className="mt-14">
                      <span
                        className={`font-semibold text-xs text-brown01 ${
                          product.isNew ? "visible" : "invisible"
                        }`}
                      >
                        New
                      </span>
                    </div>
                    <h3
                      className="font-semibold"
                      style={{ padding: "0px 26px" }}
                    >
                      <a href="#" className="group-hover:text-blue02">
                        {product.product_name}
                      </a>
                    </h3>
                    <div className="flex justify-center pt-2.5 font-normal">
                      <span>₩{addComma(product.price)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommandationCarousel;
