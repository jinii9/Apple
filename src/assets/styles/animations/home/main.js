import { type } from "@testing-library/user-event/dist/type";
import {
  setLayout,
  scrollLoop,
  setCanvasImages,
  setCanvasImageSize,
} from "./animationFunctions";
export const initScrollAnimation = () => {
  let yOffset = 0;
  let prevScrollHeight = 0;
  let currentScene = 0;
  // let enterNewScene = false;
  let isImagesLoaded = false; // 이미지 로드 상태 플래그

  let sceneInfo = [
    // 1번째 섹션
    {
      type: "sticky",
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        // text
        container: document.querySelector("#scroll-section-0"),
        messageA: document.querySelector("#scroll-section-0 .main-message.a"),
        messageB: document.querySelector("#scroll-section-0 .main-message.b"),
        messageC: document.querySelector("#scroll-section-0 .main-message.c"),
        // video
        canvas: document.querySelector("#video-canvas-1"),
        context: document.querySelector("#video-canvas-1").getContext("2d"),
        videoImages: [],
      },
      values: {
        videoImageCount: 725,
        imageSequence: [0, 724],
        canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
        // in
        messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
        messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
        messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
        messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
        messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
        messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],

        // out
        messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
        messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
        messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
        messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
        messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
        messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
      },
    },
    // 2번째 섹션
    {
      type: "sticky",
      heightNum: 10,
      scrollHeight: 0,
      objs: {
        // video
        container: document.querySelector("#scroll-section-1"),
        canvas: document.querySelector("#video-canvas-0"),
        context: document.querySelector("#video-canvas-0").getContext("2d"),
        videoImages: [],
      },
      values: {
        videoImageCount: 194,
        imageSequence: [0, 193],
        canvas_opacity_in: [0, 1, { start: 0, end: 0.1 }],
        canvas_opacity_out: [1, 0, { start: 0.95, end: 1 }],
      },
    },
    // 3번째 섹션
    // {
    //   type: "normal",
    //   scrollHeight: 0,
    //   objs: {
    //     container: document.querySelector("#scroll-section-2"),
    //   },
    // },
  ];

  /** //TODO 이미지 로드 확인 함수 */
  function checkImagesLoaded() {
    const allImages = sceneInfo.flatMap((scene) => scene.objs.videoImages);
    const loadedImages = allImages.filter((img) => img.complete);
    return allImages.length === loadedImages.length;
  }

  window.addEventListener("load", () => {
    ({ sceneInfo, currentScene } = setLayout(sceneInfo));

    // 이미지 로드 완료 확인
    if (checkImagesLoaded()) {
      isImagesLoaded = true;

      // sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0],0,0);
      // 캔버스에 첫 이미지 그리기
      sceneInfo.forEach((scene) => {
        if (scene.objs.context && scene.objs.videoImages.length > 0) {
          // 첫 번째 이미지를 위한 크기 조정
          const { xOffset, yOffset, drawWidth, drawHeight } =
            setCanvasImageSize(scene.objs, 0);
          scene.objs.context.drawImage(
            scene.objs.videoImages[0],
            xOffset,
            yOffset,
            drawWidth,
            drawHeight
          );
        }
      });
    } else {
      const intervalId = setInterval(() => {
        if (checkImagesLoaded()) {
          clearInterval(intervalId);

          isImagesLoaded = true;
          // 캔버스에 첫 이미지 그리기
          sceneInfo.forEach((scene) => {
            if (scene.objs.context && scene.objs.videoImages.length > 0) {
              // 첫 번째 이미지를 위한 크기 조정
              const { xOffset, yOffset, drawWidth, drawHeight } =
                setCanvasImageSize(scene.objs, 0);
              scene.objs.context.drawImage(
                scene.objs.videoImages[0],
                xOffset,
                yOffset,
                drawWidth,
                drawHeight
              );
            }
          });
        }
      }, 100); // 100ms 간격으로 체크
    }
  });

  window.addEventListener("resize", () => {
    ({ sceneInfo, currentScene } = setLayout(sceneInfo));
  });

  window.addEventListener("scroll", () => {
    if (!isImagesLoaded) return;

    yOffset = window.pageYOffset;

    ({ currentScene, prevScrollHeight } = scrollLoop(
      sceneInfo,
      currentScene,
      prevScrollHeight,
      yOffset
    ));
  });

  sceneInfo = setCanvasImages(sceneInfo);
};
