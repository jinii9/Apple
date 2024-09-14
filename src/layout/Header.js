import React, { useEffect, useState } from "react";
import { ReactComponent as LOGO } from "../assets/images/header/logo.svg";
import { ReactComponent as SEARCH } from "../assets/images/header/search.svg";
import { ReactComponent as CART } from "../assets/images/header/cart.svg";
import { ReactComponent as MENU } from "../assets/images/header/menu.svg";
import { useHeaderColor } from "../context/HeaderContext";
import { subMenus } from "../data/subMenu";
import HeaderMenu from "../components/HeaderMenu.js";

const subMenuData = subMenus;

function Header() {
  const { headerColor } = useHeaderColor();
  const [hoveredMenu, setHoveredMenu] = useState("store");

  console.log(headerColor);
  return (
    <>
      <div
        className="fixed top-0 z-50 w-full h-11 px-5"
        style={{ backgroundColor: headerColor.backColor }}
      >
        <div className="max-w-5xl mx-auto h-full">
          <ul
            className="flex h-full md:justify-between"
            style={{ color: headerColor.textColor }}
          >
            <li className="flex-grow md:flex-grow-0">
              <a href="#" className="inline-block px-2">
                <LOGO />
              </a>
            </li>
            <li
              onMouseEnter={() => setHoveredMenu("store")}
              onMouseLeave={() => setHoveredMenu(null)}
              // onMouseEnter={() => {
              //   setHoveredMenu("store");
              //   // toggleBlur(true);
              // }}
              // onMouseLeave={() => {
              //   setHoveredMenu(null);
              //   // toggleBlur(false);
              // }}
            >
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                스토어
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                Mac
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                iPad
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                iPhone
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                Watch
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                AirPods
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                TV 및 홈
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                엔터테인먼트
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                액세서리
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hidden md:flex items-center h-full text-xs px-2"
              >
                고객지원
              </a>
            </li>
            <li>
              <a href="#" className="inline-block px-4 md:px-2">
                <SEARCH fill="#fff" />
              </a>
            </li>
            <li>
              <a href="#" className="inline-block px-4 md:px-2">
                <CART fill="#fff" />
              </a>
            </li>
            <li className="md:hidden">
              <a
                href="#"
                className="inline-block px-4 md:px-2 flex items-center h-full"
              >
                <MENU fill="#fff" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* 서브 메뉴 */}

      {/* <HeaderMenu
        hoveredMenu={hoveredMenu}
        data={subMenuData}
        headerBackColor={headerBackColor}
      /> */}
    </>
  );
}

export default Header;
