import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import truckIcon from "../../assets/images/productdetail/truck_icon.png";
import shoppingBagIcon from "../../assets/images/productdetail/shopping_icon.png";
import speechBubbleIcon from "../../assets/images/productdetail/speechbubble_icon.png";
import bookMarkIcon from "../../assets/images/productdetail/bookmark.svg";
import { useDispatch } from "react-redux";

function ProductDetailMain({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [mainImage, setMainImage] = useState(product.img[0].url);

  // 메인 이미지가 변경되면 리렌더링합니다.
  useEffect(() => {
    setMainImage(product.img[0].url);
  }, [id, product.img]);

  // iPhone 케이스 크기 선택 시 해당 iPhone으로 라우팅합니다.
  const handleSelectChange = (e) => {
    const selectedIndex = e.target.value;
    navigate(`/store/product/${parseInt(selectedIndex) + 1}`);
  };

  // 장바구니에 상품을 추가합니다.
  const handleAddToCart = () => {
    // console.log(product);
    dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  };

  return (
    <div className="w-full">
      <div className="md:my-12 md:p-0 p-6">
        <div className="flex flex-col flex-wrap md:flex-row justify-between max-w-5xl h-full mx-auto px-4">
          <div className="mainLeft flex-col md:w-4/12 order-2 md:order-1">
            <span
              className={`font-semibold text-brown01 ${
                product.isNew ? "visible" : "invisible"
              }`}
            >
              New
            </span>
            <h1
              className="font-bold tracking-tighter"
              style={{ fontSize: "32px", lineHeight: "1.21875" }}
            >
              {product.product_name}
            </h1>
            <div
              className="price mt-3.5 font-normal"
              style={{ fontSize: "17px" }}
            >
              <span>₩{product.price}</span>
            </div>
            <div className="priceFooter pt-2">
              <a
                href="https://www.apple.com/kr/shop/go/finance?revision=R20240921-1_AUTO_TEST_REVISION"
                className="text-blue02 hover:underline"
              >
                할부 옵션 제공
              </a>
            </div>
            <div className="relative mt-8">
              {product.isSelectable && (
                <div>
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
                    onChange={handleSelectChange}
                    className={`focus: outline-blue02 rounded-xl w-full pl-4 pt-5 pb-2 pr-10 border border-gray03 cursor-pointer text-lg appearance-none`}
                  >
                    <option value={0}>iPhone 16</option>
                    <option value={1}>iPhone 16 Plus</option>
                    <option value={2}>iPhone 16 Pro</option>
                    <option value={3}>iPhone 16 Pro Max</option>
                  </select>
                </div>
              )}
            </div>
            <div
              className="buyFormWrap border-t mt-8"
              style={{ fontSize: "14px" }}
            >
              <div>
                <div className="flex mt-8">
                  <span className="mr-1">
                    <img
                      src={truckIcon}
                      style={{ width: "30px", height: "30px" }}
                    />
                  </span>
                  <div className="mt-1.5">
                    <span>출고:</span>
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
                    <span className="mr-1">
                      <img
                        src={shoppingBagIcon}
                        style={{ width: "30px", height: "30px" }}
                      />
                    </span>
                    <div className="mt-1.5">
                      <span>픽업:</span>
                      <br />
                      <button className="text-blue02 hover:underline">
                        재고 확인
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleAddToCart}
                    className="bg-blue02 active:bg-blue_active rounded-lg w-full text-white py-2 px-4 mt-8 "
                  >
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
                    <span className="mr-1">
                      <img
                        src={bookMarkIcon}
                        alt=""
                        style={{
                          width: "15px",
                          height: "15px",
                        }}
                      />
                    </span>
                    <button className=" text-blue02 hover:underline flex justify-center items-center">
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
                  <div className="pl-2 tracking-tighter">
                    <div className="font-bold">
                      제품 구입에 필요한 도움을 받아보세요.
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      <a
                        href="https://contactretail.apple.com/"
                        className="text-blue02 hover:underline"
                      >
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
          <div className="imageWrap flex-col md:w-7/12 order-1 md:order-2">
            <img
              src={mainImage}
              alt=""
              className="md:max-w-xl transition-opacity duration-300"
              style={{ opacity: mainImage ? 1 : 0 }}
            />
            <div className="thumbNavWrap flex justify-center items-center order-2 py-6 md:py-0 box-border">
              <ul className="relative flex-wrap inline-flex">
                {product.img.map((img, index) => (
                  <li key={index} className="hover:border-b-2 pt-2 mr-4">
                    <button onClick={() => setMainImage(img.url)}>
                      <img
                        className="m-1"
                        src={img.url}
                        alt=""
                        style={{ height: "38px", width: "38px" }}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailMain;
