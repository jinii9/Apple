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

  let sceneInfo = [
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

    // {
    //   type: "sticky",
    //   heightNum: 20,
    //   scrollHeight: 0,
    //   objs: {
    //     // html 객체 모음
    //     container: document.querySelector("#scroll-section-1"),
    //   },
    // },

    // {
    //   type: "normal",
    //   heightNum: 8,
    //   scrollHeight: 0,
    //   objs: {
    //     // html 객체 모음
    //     container: document.querySelector("#scroll-section-2"),
    //   },
    // },
  ];

  sceneInfo = setCanvasImages(sceneInfo);

  window.addEventListener("load", () => {
    ({ sceneInfo, currentScene } = setLayout(sceneInfo));
    // sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);

    // sceneInfo[1].objs.context.drawImage(sceneInfo[1].objs.videoImages[0], 0, 0);
  });

  window.addEventListener("resize", () => {
    ({ sceneInfo, currentScene } = setLayout(sceneInfo));
  });

  window.addEventListener("scroll", () => {
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
