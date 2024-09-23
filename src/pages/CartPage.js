import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import { addComma } from "../utils/priceFormat";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.carts);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      {/* container 대신에 max-w-5xl */}
      <div className="mainWrap max-w-5xl mx-auto pt-12 border">
        {/* 총액 */}
        <div className="totalWrap flex items-center justify-center">
          <div className="pt-2 pb-5 text-center">
            <h2 className="text-4xl font-bold leading-10">
              장바구니 총액: ₩{addComma(totalAmount)}
            </h2>
            <p className="text-lg leading-7 mt-3">
              모든 주문에 무료 배송 서비스가 제공됩니다.
            </p>
            <div className="mt-8">
              <button className="w-72 py-2 px-4 border border-blue01 rounded-lg bg-blue01 text-white">
                <span>결제</span>
              </button>
            </div>
          </div>
        </div>

        {/* 카트 */}
        <div className="cartWrap">
          {cartItems.map((item, i) => (
            <CartItem key={i} item={item} />
          ))}
        </div>

        {/* 총계 */}
        <div
          className="flex flex-col items-end"
          style={{ borderTop: "1px solid #D2D2D7" }}
        >
          <div className="mt-10 max-w-[75%] w-full flex flex-col items-end">
            <div className="w-full flex justify-between mb-2">
              <span>소계</span>
              <span>₩{addComma(totalAmount)}</span>
            </div>
            <div className="w-full flex justify-between mb-2">
              <span>배송</span>
              <span>무료</span>
            </div>
            <div
              className="w-full flex justify-between mt-4 pt-5 font-bold text-xl"
              style={{ borderTop: "1px solid #D2D2D7" }}
            >
              <span>총계</span>
              <span>₩{addComma(totalAmount)}</span>
            </div>
          </div>
          {/* 결제 버튼 */}
          <div className="mt-8">
            <button className="w-72 py-2 px-4 border border-blue01 rounded-lg bg-blue01 text-white">
              <span>결제</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
