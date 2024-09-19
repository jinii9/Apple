import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/images/productdetail/1.jpg";
import img2 from "../../assets/images/productdetail/2.jpg";
import img3 from "../../assets/images/productdetail/3.jpg";
import img4 from "../../assets/images/productdetail/4.jpg";
import img5 from "../../assets/images/productdetail/5.jpg";
import img6 from "../../assets/images/productdetail/6.jpg";
import img7 from "../../assets/images/productdetail/7.jpg";
import img8 from "../../assets/images/productdetail/8.jpg";
import img9 from "../../assets/images/productdetail/9.jpg";

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -left-6 z-10 bg-gray02 p-2 rounded-full cursor-pointer"
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
    className="absolute -right-6 z-10 bg-gray02 p-2 rounded-full cursor-pointer"
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

function RecommandationSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPrevArrow, setShowPrevArrow] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(true);

  const sliderRef = useRef(null);

  const totalSlides = 9;

  var settings = {
    className: "",
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
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex + 3);
    },
    nextArrow: showNextArrow ? <NextArrow /> : null,
    prevArrow: showPrevArrow ? <PrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      console.log(currentIndex);
    }
  }, [currentIndex]);

  return (
    <div className="w-full">
      <div className="max-w-5xl mx-auto">
        <div className="pb-20">
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
              <div className="cursor-pointer group">
                <div
                  style={{
                    height: "194px",
                    margin: "0 auto",
                    width: "194px",
                  }}
                >
                  <img src={img1} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                  <h3
                    className="font-semibold mt-14"
                    style={{ padding: "0px 26px" }}
                  >
                    <a href="#" className="group-hover:text-blue02">
                      MagSafe형 iPhone 파인우븐 카드지갑 - 블랙베리
                    </a>
                  </h3>
                  <div className="flex justify-center pt-2.5 font-normal">
                    <span>₩85,000</span>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer group">
                <div
                  style={{
                    height: "194px",
                    margin: "0 auto",
                    width: "194px",
                  }}
                >
                  <img src={img2} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                  <h3
                    className="font-semibold mt-14"
                    style={{ padding: "0px 26px" }}
                  >
                    <a href="#" className="group-hover:text-blue02">
                      MagSafe형 iPhone 16 Pro 실리콘 케이스 - 플럼
                    </a>
                  </h3>
                  <div className="flex justify-center pt-2.5 font-normal">
                    <span>₩69,000</span>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer group">
                <div
                  style={{
                    height: "194px",
                    margin: "0 auto",
                    width: "194px",
                  }}
                >
                  <img src={img3} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                  <h3
                    className="font-semibold mt-14"
                    style={{ padding: "0px 26px" }}
                  >
                    <a href="#" className="group-hover:text-blue02">
                      AirTag 파인우븐 키링 - 블랙베리
                    </a>
                  </h3>
                  <div className="flex justify-center pt-2.5 font-normal">
                    <span>₩58,000</span>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer group">
                <div
                  style={{
                    height: "194px",
                    margin: "0 auto",
                    width: "194px",
                  }}
                >
                  <img src={img4} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                  <h3
                    className="font-semibold mt-14"
                    style={{ padding: "0px 26px" }}
                  >
                    <a href="#" className="group-hover:text-blue02">
                      <span>20W USB-C 전원 어댑터</span>
                    </a>
                  </h3>
                  <div className="flex justify-center pt-2.5 font-normal">
                    ₩85,000
                  </div>
                </div>
              </div>
              <div className="cursor-pointer group">
                <div
                  style={{
                    height: "194px",
                    margin: "0 auto",
                    width: "194px",
                  }}
                >
                  <img src={img5} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                  <h3
                    className="font-semibold mt-14"
                    style={{ padding: "0px 26px" }}
                  >
                    <a href="#" className="group-hover:text-blue02">
                      <span>240W USB-C 충전 케이블(2m)</span>
                    </a>
                  </h3>
                  <div className="flex justify-center pt-2.5 font-normal">
                    ₩45,000
                  </div>
                </div>
              </div>
              <div className="cursor-pointer group">
                <div
                  style={{
                    height: "194px",
                    margin: "0 auto",
                    width: "194px",
                  }}
                >
                  <img src={img6} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                  <h3
                    className="font-semibold mt-14"
                    style={{ padding: "0px 26px" }}
                  >
                    <a href="#" className="group-hover:text-blue02">
                      <span>60W USB-C 충전 케이블(1m)</span>
                    </a>
                  </h3>
                  <div className="flex justify-center pt-2.5 font-normal">
                    ₩28,000
                  </div>
                </div>
              </div>
              <div className="cursor-pointer group">
                <div
                  style={{
                    height: "194px",
                    margin: "0 auto",
                    width: "194px",
                  }}
                >
                  <img src={img7} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                  <h3
                    className="font-semibold mt-14"
                    style={{ padding: "0px 26px" }}
                  >
                    <a href="#" className="group-hover:text-blue02">
                      <span>60W USB-C 충전 케이블(1m)</span>
                    </a>
                  </h3>
                  <div className="flex justify-center pt-2.5 font-normal">
                    ₩45,000
                  </div>
                </div>
              </div>
              <div className="cursor-pointer group">
                <div
                  style={{
                    height: "194px",
                    margin: "0 auto",
                    width: "194px",
                  }}
                >
                  <img src={img8} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                  <h3
                    className="font-semibold mt-14"
                    style={{ padding: "0px 26px" }}
                  >
                    <a href="#" className="group-hover:text-blue02">
                      <span>Thunderbolt 4(USB-C) Pro 케이블(1m)</span>
                    </a>
                  </h3>
                  <div className="flex justify-center pt-2.5 font-normal">
                    ₩85,000
                  </div>
                </div>
              </div>
              <div className="cursor-pointer group">
                <div
                  style={{
                    height: "194px",
                    margin: "0 auto",
                    width: "194px",
                  }}
                >
                  <img src={img9} alt="" />
                </div>
                <div className="flex-col justify-center items-center">
                  <h3
                    className="font-semibold mt-14"
                    style={{ padding: "0px 26px" }}
                  >
                    <a href="#" className="group-hover:text-blue02">
                      <span>
                        MagSafe형 Beats iPhone 16 Pro 케이스 -
                        립타이드&nbsp;블루
                      </span>
                    </a>
                  </h3>
                  <div className="flex justify-center pt-2.5 font-normal">
                    ₩69,000
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommandationSlider;
