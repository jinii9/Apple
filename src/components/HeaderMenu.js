import React, { useEffect } from "react";
import { useHeaderColor } from "../context/HeaderContext";

function HeaderMenu({ hoveredMenu, data }) {
  const { headerColor } = useHeaderColor();

  const menuItems = data[hoveredMenu] || [];

  return (
    <>
      <div
        className="absolute z-10 w-full py-14"
        style={{ backgroundColor: headerColor.backColor }}
      >
        <div className="menuWrap flex gap-12 max-w-5xl mx-auto pt-11">
          {menuItems.length > 0 &&
            menuItems.map((subMenu, i) => (
              <div key={i} style={{ color: headerColor.textColor }}>
                <h3 className="text-xs text-gray01 mb-4">{subMenu.Title}</h3>
                <ul className="flex flex-col gap-2">
                  {subMenu.items.map((item, idx) => (
                    <li
                      key={idx}
                      className={`font-bold ${
                        i === 0 ? "text-2xl" : "text-xs"
                      }`}
                    >
                      <a href={item.link}>{item.menu}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default HeaderMenu;
