import React, { useEffect } from "react";
import LocalNavBar from "../components/productdetail/LocalNavBar";
import ProductDetailMain from "../components/productdetail/ProductDetailMain";
import { useHeaderColor } from "../context/HeaderContext";
import ProductAccordion from "../components/productdetail/ProductAccordion";

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
      <ProductAccordion />
    </>
  );
}

export default ProductDetailPage;
