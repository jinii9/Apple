import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage.js";
import {
  HeaderColorProvider,
  HeaderMenuProvider,
} from "./context/HeaderContext.js";
import CartPage from "./pages/CartPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import MapPage from "./pages/MapPage.js";
import StorePage from "./pages/StorePage.js";

function App() {
  return (
    <HeaderColorProvider>
      <HeaderMenuProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            {/* store */}
            <Route path="/store" element={<StorePage />}></Route>
            {/* detail */}
            <Route path="/store/detail" element={<ProductDetailPage />}></Route>
            {/* map */}
            <Route path="/map" element={<MapPage/>}></Route>
            {/* cart */}
            <Route path="/shop/bag" element={<CartPage />} />
          </Route>
        </Routes>
      </HeaderMenuProvider>
    </HeaderColorProvider>
  );
}

export default App;