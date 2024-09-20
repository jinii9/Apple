import React, { useRef, useState, useEffect } from "react";

function LocalNavMenu({ isMenuVisible }) {
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState("0px");

  useEffect(() => {
    if (isMenuVisible) {
      setMenuHeight(`${menuRef.current.scrollHeight}px`);
    } else {
      setMenuHeight("0px");
    }
  }, [isMenuVisible]);

  return (
    <>
      <div>
        <div
          ref={menuRef}
          className={`w-full absolute bg-white01 z-50 border-b border-gray-300 overflow-hidden transition-all duration-300 ease-in-out`}
          style={{ maxHeight: menuHeight }}
        >
          <div
            className="mx-auto max-w-5xl text-sm"
            style={{ maxHeight: "calc(100vh - 48px - 2.82353em)" }}
          >
            <div className="flex">
              <div className="m-5" style={{ flexBasis: "25%" }}>
                <h2 className="font-bold">제품별로 쇼핑하기</h2>
                <ul className="leading-8">
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      Mac
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      iPad
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      iPhone
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      Watch
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      TV 및 홈
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      모든 제품
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:border-l md:border-gray-300 m-5 pl-7">
                <h2 className="font-bold">카테고리별로 쇼핑하기</h2>
                <ul className="leading-8">
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      AirTag 및 액세서리
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      MagSafe
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      건강 및 피트니스
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      게임
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      사진
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      스마트 홈 액세서리
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      창작 도구
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      충전 필수템
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      케이스 & 보호장비
                    </a>
                  </li>
                  <li className="my-1">
                    <a href="#" className="hover:underline hover:text-blue01">
                      헤드폰 & 스피커
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-10 bg-white02 backdrop-filter backdrop-blur-sm h-full w-full bg-opacity-10"></div>
    </>
  );
}

export default LocalNavMenu;
