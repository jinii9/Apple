import React, { useEffect, useRef } from "react";
import { useHeaderColor } from "../context/HeaderContext";
import "../assets/styles/homePage.css";
import { initScrollAnimation } from "../assets/styles/\banimations/home/main";
import { motion } from "framer-motion";
import { useScrollVideoPlayback } from "../hooks/useScrollVideoPlayback";

function HomePage() {
  const videoRef1 = useScrollVideoPlayback(0.5);
  const videoRef2 = useScrollVideoPlayback(0.5);

  useEffect(() => {
    // 이 컴포넌트에서 initScrollAnimation 함수를 호출하여 스크롤 애니메이션을 초기화합니다.
    // 컴포넌트가 언마운트될 때 클린업 함수를 호출하여 메모리 누수를 방지합니다.
    const cleanup = initScrollAnimation();

    // 컴포넌트 언마운트 시 클린업 함수 호출
    return cleanup;
  }, []);

  return (
    <div>
      {/* // TODO section 0: 글자 스크롤 + 맥북 비디오 */}
      <section className="scroll-section" id="scroll-section-0">
        <div className="sticky-elem sticky-elem-canvas">
          <canvas id="video-canvas-1" width="1920" height="1080"></canvas>
        </div>

        <h1>iPhone 16 Pro</h1>
        <div className="sticky-elem main-message a">
          <p>사랑받기 위해 디자인되다.</p>
        </div>
        <div className="sticky-elem main-message b">
          <p>알면 알수록, iPhone.</p>
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

        {/* <div className="text-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              y: { duration: 1 },
            }}
          >
            <div className="container mx-auto px-4 md:px-0">
              <div className="md:mx-24">
                <h1 className="text-3xl md:text-6xl font-bold mb-8">
                  날렵하게. 강력하게. M3답게.
                </h1>
                <p className="text-base  md:text-xl text-gray01 font-bold">
                  세상에서 가장 사랑받는 노트북 <strong>MacBook Air</strong>가
                  <strong>M3 칩</strong>과 만나 한층 강력해졌습니다. 일부터
                  놀이까지, 무엇이든 가뿐하죠. 최대 18시간의 배터리 사용 시간
                  <sup>1</sup>과 극강의 휴대성을 자랑하는 MacBook Air와 함께라면
                  어디서든, 어떤 일이든 너끈히 해낼 수 있습니다.
                </p>
                <div className="text-sm font-semibold mt-8">
                  <span className="text-red-500 mr-1">New</span>
                  M3 칩 탑재 MacBook Air ₩1,590,000부터 <br />
                  M2 칩 탑재 MacBook Air ₩1,390,000부터
                </div>
              </div>
            </div>
          </motion.div>
        </div> */}
      </section>

      {/* // TODO section 1: 글자 스크롤 + 맥북 비디오 */}
      <section className="scroll-section" id="scroll-section-2">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            y: { duration: 1 },
          }}
        >
          {/* <div className="container mx-auto px-4 md:px-0"> */}
          <div className="max-w-3xl mx-auto px-3 md:px-0">
            <h1 className="text-3xl md:text-6xl font-bold mb-8">
              날렵하게. 강력하게. M3답게.
            </h1>
            <p className="text-base  md:text-xl text-gray01 font-bold">
              세상에서 가장 사랑받는 노트북 <strong>MacBook Air</strong>가
              <strong>M3 칩</strong>과 만나 한층 강력해졌습니다. 일부터
              놀이까지, 무엇이든 가뿐하죠. 최대 18시간의 배터리 사용 시간
              <sup>1</sup>과 극강의 휴대성을 자랑하는 MacBook Air와 함께라면
              어디서든, 어떤 일이든 너끈히 해낼 수 있습니다.
            </p>
            <div className="text-sm font-semibold mt-8">
              <span className="text-red-500 mr-1">New</span>
              M3 칩 탑재 MacBook Air ₩1,590,000부터 <br />
              M2 칩 탑재 MacBook Air ₩1,390,000부터
            </div>
          </div>
        </motion.div>
      </section>

      {/* // TODO section 2: 글 */}
      <section className="scroll-section pt-20" id="scroll-section-3">
        {/* TODO */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            y: { duration: 1 },
          }}
        >
          <div className="max-w-4xl mx-auto px-3 md:px-0">
            <p className="text-xs">가뿐한 휴대성</p>
            <h1 className="text-3xl md:text-6xl font-bold mb-8 mt-2">
              어디서나 종횡무진할 수 있도록.
            </h1>
            <div className="my-14">
              <video
                id="video-1"
                ref={videoRef1}
                width="1920"
                height="1080"
                src="/videos/home/video1.mp4"
                muted
                autoPlay
              ></video>
            </div>
            <p className="text-base  md:text-xl text-gray01 font-bold">
              <strong className="text-black">
                엄청나게 가벼운 무게와 1cm 남짓에 불과한 두께로
              </strong>
              당신의 일상에 자연스레 스며드는 MacBook Air는 지구의 환경을
              생각하는 마음을 담아 설계되었습니다. M3 칩 탑재 MacBook Air는
              Apple 사상 최초로 재활용 소재 사용 비율 50%를 달성한 제품입니다.
              그리고 다른 모든 MacBook Air 노트북과 마찬가지로 내구성이 뛰어난
              재활용 알루미늄 외장을 갖추고 있죠.
            </p>
          </div>
        </motion.div>

        {/* TODO */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            y: { duration: 1 },
          }}
        >
          <div className="max-w-4xl mx-auto px-3 md:px-0">
            <div className="my-14">
              <video
                id="video-1"
                ref={videoRef2}
                width="1920"
                height="1080"
                src="/videos/home/video2.mp4"
                muted
                autoPlay
              ></video>
            </div>
            <p className="text-base  md:text-xl text-gray01 font-bold">
              <strong className="text-black">
                완벽한 휴대성을 자랑하는 두 가지 사이즈.
              </strong>
              13 모델이 그야말로 궁극의 휴대성을 자랑하는 노트북이라면, 15
              모델은 멀티태스킹도 문제없는 널찍한 화면과 탁월한 휴대성이
              어우러진 노트북입니다.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
