import React, { useState } from "react";
import productImage from "../../assets/images/productdetail/black.jpg";
import truckIcon from "../../assets/images/productdetail/truck_icon.png";
import shoppingBagIcon from "../../assets/images/productdetail/shopping_icon.png";
import speechBubbleIcon from "../../assets/images/productdetail/speechbubble_icon.png";
import bookMarkIcon from "../../assets/images/productdetail/bookmark.svg";
import thumbNav1 from "../../assets/images/productdetail/black_sm.jpg";
import thumbNav2 from "../../assets/images/productdetail/white_sm.jpg";
import thumbNav3 from "../../assets/images/productdetail/bronze_sm.jpg";
import thumbNav4 from "../../assets/images/productdetail/silver_sm.jpg";
import thumbNav5 from "../../assets/images/productdetail/front_sm.jpg";

function ProductDetailMain() {
  const [isClicked, setClicked] = useState(false);

  const handleForm = () => {
    setClicked(!isClicked);
  };

  return (
    <div className="w-full tracking-tighter">
      <div className="md:my-12 md:p-0 p-6">
        <div className="flex flex-col flex-wrap md:flex-row justify-between max-w-5xl h-full mx-auto px-4">
          <div className="mainLeft flex-col md:w-4/12 order-2 md:order-1">
            <span className="font-bold text-brown01">New</span>
            <h1 className="text-3xl font-bold ">
              MagSafe형 iPhone 16 Pro 투명 케이스
            </h1>
            <div className="price mt-3.5">
              <span>₩69,000</span>
            </div>
            <div className="priceFooter pt-2">
              <a href="#" className="text-blue02 hover:underline">
                할부 옵션 제공
              </a>
            </div>
            <div className="relative mt-8">
              <span
                className="text-[12px] 
                font-normal 
                tracking-tight 
                leading-[1.3333733333] 
                max-w-[calc(100%-54px)] 
                overflow-hidden 
                pointer-events-none 
                absolute 
                text-ellipsis 
                top-[0.5rem]
                left-3
                whitespace-nowrap
                bg-white px-1"
              >
                크기
              </span>
              <select
                onClick={handleForm}
                name=""
                id=""
                className={`rounded-lg w-full pl-4 pt-5 pb-2 pr-10 border cursor-pointer text-lg appearance-none ${
                  isClicked ? "outline-blue02" : "border-gray-300"
                }
        `}
              >
                <option>iPhone 16</option>
                <option>iPhone 16 Plus</option>
                <option>iPhone 16 Pro</option>
                <option>iPhone 16 Pro Max</option>
              </select>
            </div>
            <div
              className="buyFormWrapper border-t mt-8"
              style={{ fontSize: "14px" }}
            >
              <div>
                <div className="flex mt-8">
                  <span>
                    <img
                      src={truckIcon}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </span>
                  <div>
                    <span className="font-bold">출고:</span>
                    <ul>
                      <li>1 영업일</li>
                      <li>무료 배송</li>
                    </ul>
                    <button className="text-blue02 hover:underline">
                      배송 일자 확인
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex pt-4">
                    <span>
                      <img
                        src={shoppingBagIcon}
                        style={{ width: "25px", height: "25px" }}
                      />
                    </span>
                    <div>
                      <span>픽업:</span>
                      <br />
                      <button className="text-blue02 hover:underline">
                        재고 확인
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="bg-blue02 rounded-lg w-full text-white py-2 px-4 mt-8">
                    장바구니에 담기
                  </button>
                </div>
                <div className="py-9 border-b">
                  <div>
                    <h2 className="font-bold">시간이 좀 더 필요하신가요?</h2>
                    <span>
                      선택한 기기를 관심 목록에 모두 저장해두고 언제든 살펴보던
                      곳부터 다시 이어 보세요.
                    </span>
                  </div>
                  <div className="flex mt-2 items-center">
                    <span>
                      <img
                        src={bookMarkIcon}
                        alt=""
                        style={{
                          width: "18px",
                          height: "18px",
                        }}
                      />
                    </span>
                    <button className=" text-blue02 hover:underline flex justify-center items-center">
                      {" "}
                      나중을 위해 저장
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex bg-green pt-6">
                  <div>
                    <img
                      src={speechBubbleIcon}
                      style={{ width: "25px", height: "25px" }}
                    ></img>
                  </div>
                  <div className="pl-2">
                    <div className="font-bold">
                      제품 구입에 필요한 도움을 받아보세요.
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      <a href="#" className="text-blue02 hover:underline">
                        지금 채팅하기{" "}
                      </a>
                      서비스를 이용하거나
                      <br />
                      <span>080-330-8877에 전화로 문의하세요.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="productImage flex-col md:w-7/12 order-1 md:order-2">
            <img
              src={productImage}
              alt=""
              className="md:max-w-xl"
              //   style={{ height: "572px", width: "572px" }}
            />
            <div className="thumbNavWrapper flex justify-center items-center order-2">
              <ul className="flex-wrap inline-flex">
                <li className="hover:border-b-2 pt-4 mr-4">
                  <button>
                    <img
                      src={thumbNav1}
                      alt=""
                      style={{ height: "38px", width: "38px" }}
                    />
                  </button>
                </li>
                <li className="hover:border-b-2 pt-4 mr-4">
                  <button>
                    <img
                      src={thumbNav2}
                      alt=""
                      style={{ height: "38px", width: "38px" }}
                    />
                  </button>
                </li>
                <li className="hover:border-b-2 pt-4 mr-4">
                  <button>
                    <img
                      src={thumbNav3}
                      alt=""
                      style={{ height: "38px", width: "38px" }}
                    />
                  </button>
                </li>
                <li className="hover:border-b-2 pt-4 mr-4">
                  <button>
                    <img
                      src={thumbNav4}
                      alt=""
                      style={{ height: "38px", width: "38px" }}
                    />
                  </button>
                </li>
                <li className="hover:border-b-2 pt-4 mr-4">
                  <button>
                    <img
                      src={thumbNav5}
                      alt=""
                      style={{ height: "38px", width: "38px" }}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMain;
