import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBarIcon from "../../assets/images/productdetail/localnavbaricon.svg";
import MagsafeAccBanner from "./MagsafeAccBanner";

function ProductAccordion({ product }) {
  const [accordions, setAccordions] = useState({
    description: {
      isIconFlipped: false,
      isVisible: false,
    },
    compatibility: {
      isIconFlipped: false,
      isVisible: false,
    },
  });

  // 라우팅되면 아코디언의 상태를 리렌더링합니다.
  const location = useLocation();
  useEffect(() => {
    setAccordions({
      description: {
        isIconFlipped: true,
        isVisible: true,
      },
      compatibility: {
        isIconFlipped: false,
        isVisible: false,
      },
    });
  }, [location.pathname]);

  const handleAccordion = (accordionIndex) => {
    setAccordions((prevAccordions) => ({
      ...prevAccordions, // 이전 상태를 복사
      [accordionIndex]: {
        ...prevAccordions[accordionIndex],
        isIconFlipped: !prevAccordions[accordionIndex].isIconFlipped,
        isVisible: !prevAccordions[accordionIndex].isVisible,
      },
    }));
  };

  const descriptionHeightRef = useRef(null);
  const compatHeightRef = useRef(null);

  return (
    <div className="w-full tracking-tighter">
      <div className="max-w-5xl mx-auto">
        {product.isMagSafe && <MagsafeAccBanner />}
      </div>
      <div className="max-w-5xl mx-auto border-t md:p-0 p-6">
        <ul className="accordion-list">
          <li className="product-description border-b">
            <h2
              onClick={() => handleAccordion("description")}
              className="accrodionboxtitle"
            >
              <button className="flex w-full justify-between py-9">
                <div className="md:text-3xl text-2xl font-semibold">
                  제품 정보
                </div>
                <img
                  className={`w-9 h-9 md:w-11 md:h-11 transition-transform duration-300 ease-in-out fill-white ${
                    accordions.description.isIconFlipped
                      ? "transform scale-y-[-1]"
                      : "transform scale-y-100"
                  }`}
                  src={NavBarIcon}
                  alt="icon"
                />
              </button>
            </h2>
            <div
              ref={descriptionHeightRef}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                height: accordions.description.isVisible
                  ? `${descriptionHeightRef.current?.scrollHeight}px`
                  : "0px",
              }}
            >
              <div className="Overview">
                <div className="md:flex">
                  <div className="md:w-1/4 text-2xl font-semibold">
                    <div className="pb-11">개요</div>
                  </div>
                  <div className="md:w-3/4 flex-col border-b pb-11">
                    {product.overview.map((item, index) => (
                      <div key={index} className="pb-6">
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="WhatsIntheBox">
                <div className="md:flex pt-11">
                  <div className="md:w-1/4 text-2xl font-semibold">
                    <div className="pb-11">제품 구성</div>
                  </div>
                  <div className="md:w-3/4 flex-col border-b pb-11">
                    {product.in_the_box.map((item, index) => (
                      <div key={index}>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="TechSpec">
                <div className="md:flex pt-11">
                  <div className="md:w-1/4 text-2xl font-semibold">
                    <div className="pb-11">제품 사양</div>
                  </div>
                  <div className="md:w-3/4 flex-col pb-11">
                    <div>
                      <ul>
                        <h4 className="font-semibold pb-2">상품정보표시</h4>
                        <li>수입자: 애플코리아 유한회사</li>
                        <li>제조자: Apple Inc.</li>
                        <li>제조국: 중국</li>
                        <li>
                          {"품질보증기준: "}
                          <a
                            className="text-blue02 underline"
                            href="https://www.apple.com/kr/legal/warranty"
                          >
                            https://www.apple.com/kr/legal/warranty
                          </a>
                        </li>
                        <li>서비스 연락처: 080-333-4000</li>
                        <li>모델명: {product.model_code}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="product-compatibility">
            <h2
              onClick={() => {
                handleAccordion("compatibility");
              }}
              className="accrodionboxtitle"
            >
              <button className="flex w-full justify-between py-9">
                <div className="md:text-3xl text-2xl font-semibold">호환성</div>
                <img
                  className={`w-9 h-9 md:w-11 md:h-11  transition-transform duration-300 ease-in-out ${
                    accordions.compatibility.isIconFlipped
                      ? "transform scale-y-[-1]"
                      : "transform scale-y-100"
                  }`}
                  src={NavBarIcon}
                  alt="icon"
                />
              </button>
            </h2>
            <div
              ref={compatHeightRef}
              className="overflow-hidden transition-all duration-300 ease-in-out border-b "
              style={{
                height: accordions.compatibility.isVisible
                  ? `${compatHeightRef.current?.scrollHeight}px`
                  : "0px",
              }}
            >
              <div className="md:flex">
                <div className="md:w-1/4 font-semibold">
                  <div className="pb-11"></div>
                </div>
                <div
                  className="md:w-3/4 flex-col pb-11 "
                  style={{ fontSize: "17px" }}
                >
                  <div>
                    <h3 className="font-semibold mb-1.5">iPhone 모델</h3>
                    <ul>
                      {product.compatible_devices.map((devices, index) => (
                        <li className="pb-1.5" key={index}>
                          <span>{devices}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductAccordion;
