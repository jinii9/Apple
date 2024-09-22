import React, { useState } from "react";
import { ReactComponent as ARROW } from "../../assets/images/cart/arrow.svg";
import { ReactComponent as CART } from "../../assets/images/cart/cart.svg";
import { useDispatch } from "react-redux";
import { addComma } from "../../utils/priceFormat";

function CartItem({ item }) {
  const imageUrl = require("../../assets/images/iPhone_16_t_case/MA6A4.jpg");
  const dispatch = useDispatch();
  const [seletedCnt, setSelectedCnt] = useState(1);

  const handleRemoveBtn = (item) => {
    console.log(item);
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const handleSelectChange = (e) => {
    const cnt = parseInt(e.target.value);
    setSelectedCnt(cnt);

    dispatch({
      type: "UPDATE_CNT",
      payload: { id: item.id, count: cnt },
    });
  };

  return (
    <div className="py-20" style={{ borderTop: "1px solid #D2D2D7" }}>
      <div className="flex">
        {/* 이미지 */}
        <div className="max-w-[203px] flex-1">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt="상품 이미지"
          />
        </div>

        {/* 설명 */}
        <div className="flex-1">
          {/* 설명1 */}
          <div className="flex">
            <div className="w-[50%] pr-5">
              <h1 className="font-bold text-lg md:text-2xl">
                {item.product_name}
              </h1>
            </div>

            <div className="w-[14%] pl-5">
              <div className="inline-block relative text-lg md:text-2xl font-bold">
                <select
                  className="appearance-none bg-transparent pr-3 md:pr-10 cursor-pointer"
                  value={seletedCnt}
                  onChange={handleSelectChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>

                <span className="absolute right-3 transform top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-2 md:w-5 md:h-5">
                    <ARROW
                      width="100%"
                      height="100%"
                      // width="20"
                      // height="20"
                      stroke="#0071e3"
                      strokeWidth="14"
                    />
                  </div>
                </span>
              </div>
            </div>

            <div className="w-[36%] flex flex-col items-end gap-3 font-semibold">
              <h2>₩{addComma(item.price)}</h2>
              <button
                className="block text-blue01"
                onClick={() => handleRemoveBtn(item)}
              >
                삭제
              </button>
              <button className="block text-blue01">나중을 위해 저장</button>
            </div>
          </div>

          {/* 설명2: 픽업 */}
          <div
            className="flex ml-2 mt-5 pt-5"
            style={{ borderTop: "1px solid #D2D2D7" }}
          >
            <span>
              <CART />
            </span>
            <p className="ml-2">가까운 Apple Store에서 픽업하십시오.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
