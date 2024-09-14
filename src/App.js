import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* store */}
          {/* detail */}
          <Route path="/store/detail" element={<ProductDetailPage />}></Route>
          {/* map */}
          {/* cart */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
