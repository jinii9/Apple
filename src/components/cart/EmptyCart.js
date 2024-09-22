import React from "react";

/** 장바구니가 비어 있을 경우 */
function EmptyCart() {
  return (
    <div className="mx-3">
      <div className="flex flex-col items-start">
        <h2 className="text-4xl font-bold leading-10">
          장바구니가 비어 있습니다.
        </h2>
        <p className="text-lg leading-7 mt-3">
          모든 주문에 무료 배송 서비스가 제공됩니다.
        </p>
      </div>
      <div className="mt-8">
        <button className="py-4 px-36 border border-blue01 rounded-xl text-blue01">
          쇼핑 계속하기
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;
