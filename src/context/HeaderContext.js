import React, { createContext, useContext, useState } from "react";

const HeaderColorContext = createContext();

export function HeaderColorProvider({ children }) {
  const [headerBackColor, setHeaderBackColor] = useState("#ffffff");
  const [headerTextColor, setHeaderTextColor] = useState("#000000");

  return (
    <HeaderColorContext.Provider
      value={{
        headerBackColor,
        setHeaderBackColor,
        headerTextColor,
        setHeaderTextColor,
      }}
    >
      {children}
    </HeaderColorContext.Provider>
  );
}

// 커스텀 훅
export function useHeaderColor() {
  return useContext(HeaderColorContext);
}
