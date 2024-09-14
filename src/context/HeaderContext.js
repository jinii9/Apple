import React, { createContext, useContext, useState } from "react";

/** header 색상 관리 */
const HeaderColorContext = createContext();

export function HeaderColorProvider({ children }) {
  const [headerColor, setHeaderColor] = useState({
    backColor: "#ffffff",
    textColor: "#000000",
  });

  return (
    <HeaderColorContext.Provider
      value={{
        headerColor,
        setHeaderColor,
      }}
    >
      {children}
    </HeaderColorContext.Provider>
  );
}
export function useHeaderColor() {
  return useContext(HeaderColorContext);
}

/** header 블러 처리를 위한 메뉴 hover 관리 */
const HeaderMenuContext = createContext();

export function HeaderMenuProvider({ children }) {
  // const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState("store");

  return (
    <HeaderMenuContext.Provider
      value={{
        hoveredMenu,
        setHoveredMenu,
      }}
    >
      {children}
    </HeaderMenuContext.Provider>
  );
}
export function useHeaderMenu() {
  return useContext(HeaderMenuContext);
}
