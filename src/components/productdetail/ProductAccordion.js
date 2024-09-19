import React, { useState, useRef } from "react";
import NavBarIcon from "../../assets/images/productdetail/localnavbaricon.svg";

function ProductAccordion() {
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
      <div className="max-w-5xl mx-auto border-t md:p-0 p-6">
        <ul className="accordion-list">
          <li className="product-description border-b">
            <h2
              onClick={() => handleAccordion("description")}
              className="accrodionboxtitle"
            >
              <button className="flex w-full justify-between py-9">
                <div className="text-3xl font-semibold">제품 정보</div>
                <img
                  className={`w-11 h-11 transition-transform duration-300 ease-in-out fill-white ${
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
                    <div className="pb-6">
                      <p>
                        얇고 가벼운 데다 탁월한 그립감을 선사하는 Apple 제작
                        투명 케이스는 iPhone 16 Pro의 아름다운 색상을 그대로
                        보여 주면서도 폰을 철저히 보호해 줍니다.
                      </p>
                    </div>
                    <div className="pb-6">
                      <p>
                        투명한 폴리카보네이트와 유연한 소재로 혼합 제작된 이
                        케이스는 버튼을 딱 맞게 감싸도록 디자인되어 있어 사용이
                        편리합니다. 또, 투명 케이스는 ‘카메라 컨트롤'을 원활하게
                        사용할 수 있습니다. 사파이어 캡에 전도층 처리가 되어
                        있어 케이스를 씌운 채로도 카메라 컨트롤을 조작하는
                        손가락의 움직임이 정밀하게 감지되죠.
                      </p>
                    </div>
                    <div className="pb-6">
                      <p>
                        표면은 외부뿐 아니라 내부까지도 긁힘 방지 코팅이
                        적용되어 있습니다. 또한, 황변 방지에 최적화된 소재 및
                        코팅 덕분에 시간이 지나도 케이스의 색깔이 변하지 않죠.
                      </p>
                    </div>
                    <div className="pb-6">
                      <p>
                        iPhone 16 Pro와 완벽하게 정렬을 이루는 내장 자석 덕분에
                        이 케이스는 언제나 마법 같은 탈부착 경험과 더 빠른 무선
                        충전 기능을 제공합니다. iPhone 충전 시에는 케이스를 씌운
                        채로 MagSafe 충전기를 착 붙이거나, Qi2 또는 Qi 인증
                        충전기에 올려 두면 되죠.
                      </p>
                    </div>
                    <div className="pb-6">
                      <p>
                        모든 Apple 제작 케이스와 마찬가지로, 이 케이스 역시 설계
                        및 제조 과정 전반에서 수천 시간의 테스트를 거쳤습니다.
                        덕분에 멋진 디자인은 물론, 긁힘과 낙하 충격으로부터
                        iPhone을 보호할 수 있는 내구성도 갖추었죠.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="WhatsIntheBox">
                <div className="md:flex pt-11">
                  <div className="md:w-1/4 text-2xl font-semibold">
                    <div className="pb-11">제품 구성</div>
                  </div>
                  <div className="md:w-3/4 flex-col border-b pb-11">
                    <div>
                      <p>MagSafe형 iPhone 16 Pro 투명 케이스</p>
                    </div>
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
                          <a href="https://www.apple.com/kr/legal/warranty">
                            https://www.apple.com/kr/legal/warranty
                          </a>
                        </li>
                        <li>서비스 연락처: 080-333-4000</li>
                        <li>모델명: A3245</li>
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
                <div className="text-3xl font-semibold">호환성</div>
                <img
                  className={`w-11 h-11 transition-transform duration-300 ease-in-out ${
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
                <div className="md:w-1/4 text-2xl font-semibold">
                  <div className="pb-11"></div>
                </div>
                <div className="md:w-3/4 flex-col pb-11">
                  <div>
                    <h3 className="font-semibold mb-1">iPhone 모델</h3>
                    <ul>
                      <li>
                        <span>iPhone 16 Pro</span>
                      </li>
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
