import React, { useEffect } from "react";
import LocalNavBar from "../components/productdetail/LocalNavBar";
import ProductDetailMain from "../components/productdetail/ProductDetailMain";
import { useHeaderColor } from "../context/HeaderContext";
import ProductAccordion from "../components/productdetail/ProductAccordion";
import RecommandationCarousel from "../components/productdetail/RecommandationCarousel";

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
      <RecommandationCarousel />
    </>
  );
}

export default ProductDetailPage;
