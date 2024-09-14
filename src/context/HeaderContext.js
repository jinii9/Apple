import React, { createContext, useContext, useState } from "react";

// header 색상
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
