import React, { useEffect } from "react";
import { useHeaderColor } from "../context/HeaderContext";
import ShopHeader from "../components/store/ShopHeader";

function StorePage() {
  const { setHeaderBackColor, setHeaderTextColor } = useHeaderColor();

  useEffect(() => {
    setHeaderBackColor("rgba(22, 22, 23, .8)");
    setHeaderTextColor("#fff");
  }, []);

  return (
    <>
      <ShopHeader />
    </>
  );
}

export default StorePage;
