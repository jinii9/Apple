import React, { useEffect } from "react";
import { useHeaderColor } from "../context/HeaderContext";
import ShopHeader from "../components/store/ShopHeader";
import ShopCardsShelf from "../components/store/ShopCardsShelf";

function StorePage() {
  const { setHeaderBackColor, setHeaderTextColor } = useHeaderColor();

  useEffect(() => {
    setHeaderBackColor("rgba(22, 22, 23, .8)");
    setHeaderTextColor("#fff");
  }, [setHeaderBackColor, setHeaderTextColor]);

  const bgStyle = {
    backgroundColor: "#f5f5f7",
  };

  const fontStyleKo = {
    fontFamily: `"SF Pro KR", "SF Pro Display", "SF Pro Icons", "Apple Gothic", "HY Gulim", "MalgunGothic", "HY Dotum", "Lexi Gulim", "Helvetica Neue", Helvetica, Arial, sans-serif`,
    letterSpacing: 0,
    lineHeight: "1.1875",
    wordBreak: "keep-all",
    display: "inline",
  };

  // 스타일 객체 병합
  const combinedStyle = { ...fontStyleKo, ...bgStyle };

  return (
    <>
      <div style={combinedStyle}>
        <ShopHeader />
        <ShopCardsShelf />
      </div>
    </>
  );
}

export default StorePage;
