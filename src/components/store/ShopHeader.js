import React, { useEffect, useState } from "react";

function ShopHeader() {
  const [containerStyle, setContainerStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1024 && screenWidth <= 1440) {
        const marginInline = `calc(-268.46154px + 28.36538vw)`;
        setContainerStyle({ marginInline });
      } else {
        setContainerStyle({}); // 범위를 벗어나면 Reset
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="mx-[22px] min-h-[196px] relative w-auto lg:mx-[140px]"
      style={containerStyle}
    >
      Shop
    </div>
  );
}

export default ShopHeader;
