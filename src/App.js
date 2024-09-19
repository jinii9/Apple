import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage.js";
import MapPage from "./pages/MapPage.js";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<MapPage/>}>
          <Route index element={<HomePage />} />
          
          {/* store */}
          {/* detail */}

          {/* map */}
          {/* cart */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;