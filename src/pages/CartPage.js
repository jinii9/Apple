import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CartItem from "../components/cart/CartItem";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.carts);

  return (
    <>
      {/* container 대신에 max-w-5xl */}
      <div className="mainWrap max-w-5xl mx-auto pt-12 border">
        {/* 총액 */}
        <div className="totalWrap bg-red-50 flex items-center justify-center">
          <div className="pt-2 pb-5 text-center">
            <h2 className="text-4xl font-bold leading-10">
              장바구니 총액: ₩1231231
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
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default CartPage;
