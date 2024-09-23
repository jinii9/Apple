import React, { useState } from "react";
import { ReactComponent as NavBarIcon } from "../../assets/images/productdetail/localnavbaricon.svg";
import LocalNavMenu from "./LocalNavMenu";

function LocalNavBar() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsFlipped(!isFlipped);
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="my-11">
      <div
        className={`w-full h-14 bg-white ${
          isFlipped ? "border-none" : "border-b"
        } border-gray-300`}
      >
        <div className="flex max-w-5xl mx-auto h-full justify-between py-3 px-4">
          <a
            href="https://www.apple.com/kr/shop/accessories/all"
            className="flex justify-center items-center text-base md:text-xl font-bold"
          >
            액세서리
          </a>
          <div
            onClick={handleMenuToggle}
            className="flex justify-center items-center cursor-pointer"
          >
            <a href="#" className="text-sm hidden md:flex mr-2.5">
              모두 검색
            </a>
            <NavBarIcon
              className={`transition-transform duration-300 ease-in-out ${
                isFlipped ? "transform scale-y-[-1]" : "transform scale-y-100"
              }`}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        </div>
      </div>
      {isMenuVisible && <LocalNavMenu isMenuVisible={isMenuVisible} />}
    </div>
  );
}

export default LocalNavBar;
