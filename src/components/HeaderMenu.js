import React, { useEffect } from "react";
import { useHeaderColor } from "../context/HeaderContext";

function HeaderMenu({ hoveredMenu, data }) {
  const { headerBackColor } = useHeaderColor();
  const menuItems = data[hoveredMenu] || [];

  return (
    <>
      <div
        className="absolute z-10 w-full"
        style={{ backgroundColor: headerBackColor }}
      >
        <div className="menuWrap flex gap-5 ">
          {menuItems.length > 0 &&
            menuItems.map((subMenu, i) => (
              <div key={i}>
                <h3>{subMenu.Title}</h3>
                <ul>
                  {subMenu.items.map((item, idx) => (
                    <li key={idx}>
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
