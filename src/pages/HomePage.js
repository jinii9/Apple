import React, { useEffect } from "react";
import { useHeaderColor } from "../context/HeaderContext";
import "../assets/styles/homePage.css";
import { initScrollAnimation } from "../assets/styles/\banimations/home/main";

function HomePage() {
  useEffect(() => {
    // 이 컴포넌트에서 initScrollAnimation 함수를 호출하여 스크롤 애니메이션을 초기화합니다.
    // 컴포넌트가 언마운트될 때 클린업 함수를 호출하여 메모리 누수를 방지합니다.
    const cleanup = initScrollAnimation();

    // 컴포넌트 언마운트 시 클린업 함수 호출
    return cleanup;
  }, []);

  return (
    <div>
      {/* // TODO section 1: 글자 스크롤 + 맥북 비디오 */}
      <section className="scroll-section" id="scroll-section-0">
        <h1>MacBook Air</h1>
        <div className="sticky-elem main-message a">
          <p>날렵하게. 강력하게. M3답게.</p>
        </div>
        <div className="sticky-elem main-message b">
          <p>어디서나 종횡무진할 수 있도록.</p>
        </div>
        <div className="sticky-elem main-message c">
          <p>강력함이 한가득.</p>
        </div>
      </section>

      {/* //TODO section 0: 비디오 */}
      <section className="scroll-section" id="scroll-section-1">
        <div className="sticky-elem sticky-elem-canvas">
          <canvas id="video-canvas-0" width="1920" height="1080"></canvas>
        </div>
      </section>

      {/* // TODO section 1: 글자 스크롤 + 맥북 비디오 */}
      {/* <section className="scroll-section" id="scroll-section-2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          sunt placeat quibusdam ipsum. Repudiandae vel ea dignissimos
          recusandae eligendi. Omnis atque enim autem id placeat neque dolorem
          impedit exercitationem. Tenetur debitis blanditiis iusto ut laudantium
          facilis culpa adipisci nisi dolores nobis, necessitatibus itaque
          ducimus velit ullam, ab a ad rerum, cumque distinctio deserunt error?
          Facilis harum eius, ratione quibusdam assumenda exercitationem culpa
          quasi voluptatibus fuga, praesentium illo, rem numquam! Impedit nisi
          aperiam pariatur cumque rerum! Fuga quo molestiae, quibusdam quisquam
          quos dolore laboriosam repellendus nulla blanditiis quis
          necessitatibus facilis sapiente quas eveniet quasi modi! Doloribus
          optio fugit exercitationem tempora aliquam.
        </p>
      </section> */}
      {/* // TODO section 1: 글자 스크롤 + 맥북 비디오 */}
      {/* <section className="scroll-section" id="scroll-section-2"></section> */}
    </div>
  );
}

export default HomePage;
