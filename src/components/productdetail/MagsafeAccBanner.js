import React from "react";

function MagsafeAccBanner() {
  return (
    <div className="w-full">
      <div>
        <video
          autoPlay
          muted
          loop
          src="https://www.apple.com/105/media/ww/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/xlarge_2x.mp4"
        ></video>
      </div>
      <div
        className="max-w-5xl px-10 md:p-0 border-b text-center"
        style={{ backgroundColor: "#f5f5f7" }}
      >
        <div style={{ padding: "34px 0 29px 0" }}>
          <div className="flex justify-center items-center font-semibold tracking-tighter text-4xl">
            MagSafe로 믹스앤매치.
          </div>
          <p
            className="flex justify-center items-center "
            style={{ marginTop: "20.6px" }}
          >
            손쉬운 탈부착과 더욱 빠른 무선 충전을 자랑하는 다채로운 색상의
            액세서리 제품군.
          </p>
          <div
            className="flex  justify-center items-center"
            style={{ marginTop: "13.6px" }}
          >
            <a
              className="text-blue02 hover:underline"
              href="https://www.apple.com/kr/shop/accessories/all/magsafe"
            >
              MagSafe 액세서리 쇼핑하기
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-cases-magsafe-202409?wid=548&hei=296&fmt=png-alpha&.v=1723856408539"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MagsafeAccBanner;
