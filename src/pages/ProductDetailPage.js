import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LocalNavBar from "../components/productdetail/LocalNavBar";
import ProductDetailMain from "../components/productdetail/ProductDetailMain";
import ProductAccordion from "../components/productdetail/ProductAccordion";
import RecommandationCarousel from "../components/productdetail/RecommandationCarousel";
import { productList } from "../data/productList";

function ProductDetailPage() {
  // URL에서 id를 가져옵니다.
  const { id } = useParams();
  const product = productList.find((item) => item.id === id);

  if (!product) {
    return (
      <div>
        <div className="flex justify-center items-center my-40 font-bold text-6xl text-center">
          찾으시는 제품이 없는 듯하네요.<br></br>
          아래 제품은 어떠세요?
        </div>
        <RecommandationCarousel />
      </div>
    );
  } else
    return (
      <>
        <LocalNavBar />
        <ProductDetailMain product={product} />
        <ProductAccordion product={product} />
        <RecommandationCarousel />
      </>
    );
}

export default ProductDetailPage;
