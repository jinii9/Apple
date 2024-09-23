import { useState, useEffect } from "react";

export function useResizeHandler() {
  const [containerStyle, setContainerStyle] = useState({});
  const [slidesOffsetBefore, setSlidesOffsetBefore] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let calculatedMargin;
      let calculatedOffset;

      if (screenWidth > 1440) {
        calculatedMargin = "140px";
        calculatedOffset = 140;
      } else if (screenWidth >= 1024 && screenWidth <= 1440) {
        calculatedMargin = `calc(-268.46154px + 28.36538vw)`;
        const offsetValue = screenWidth * 0.28 - 268.46154;
        calculatedOffset = Math.max(20, offsetValue);
      } else {
        calculatedMargin = "20px";
        calculatedOffset = 20;
      }

      setContainerStyle({ marginLeft: calculatedMargin });
      setSlidesOffsetBefore(calculatedOffset);
    };

    handleResize();
    setIsReady(true);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { containerStyle, slidesOffsetBefore, isReady };
}
