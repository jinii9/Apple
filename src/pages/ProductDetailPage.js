import React, { useEffect } from "react";
import LocalNavBar from "../components/productdetail/LocalNavBar";
import ProductDetailMain from "../components/productdetail/ProductDetailMain";
import { useHeaderColor } from "../context/HeaderContext";
import ProductAccrodion from "../components/productdetail/ProductAccrodion";

function ProductDetailPage() {
  const { setHeaderBackColor, setHeaderTextColor } = useHeaderColor();

  useEffect(() => {
    setHeaderBackColor("#fafafccc");
    setHeaderTextColor("#000");
  }, []);

  return (
    <>
      <LocalNavBar />
      <ProductDetailMain />
      <ProductAccrodion />
    </>
  );
}

export default ProductDetailPage;
