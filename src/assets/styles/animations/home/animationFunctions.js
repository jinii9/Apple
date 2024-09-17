/** // TODO setLayout : 각 스크롤 섹션 높이 세팅 */
export function setLayout(sceneInfo) {
  for (let i = 0; i < sceneInfo.length; i++) {
    if (sceneInfo[i].type === "sticky") {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    } else if (sceneInfo[i].type === "normal") {
      sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
    }

    sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
  }

  // currentScene 처리
  let totalScrollHeight = 0;
  let currentScene = 0;

  for (let i = 0; i < sceneInfo.length; i++) {
    totalScrollHeight += sceneInfo[i].scrollHeight;

    let yOffset = window.pageYOffset;
    if (totalScrollHeight >= yOffset) {
      currentScene = i;
      break;
    }
  }

  document.body.setAttribute("id", `show-scene-${currentScene}`);

  // canvas 크기 맞추기
  const heightRatio = window.innerHeight / 1080;
  sceneInfo[1].objs.canvas.style.transform = `scale(${heightRatio})`;
  sceneInfo[1].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;

  return { sceneInfo, currentScene };
}

/** // TODO setCanvasImages : 캔버스 이미지 세팅 */
export function setCanvasImages(sceneInfo) {
  let imgElem;
  for (let i = 0; i < sceneInfo[1].values.videoImageCount; i++) {
    imgElem = new Image();
    // imgElem.src = `../../../videos/home/001/${1 + i}.jpg`;
    imgElem.src = `videos/home/001/${1 + i}.jpg`;

    sceneInfo[1].objs.videoImages.push(imgElem);
  }

  return sceneInfo;
}
/** //TODO setCanvasImageSize : 캔버스 이미지 비율 맞추기  */
export function setCanvasImageSize(objs, sequence) {
  const img = objs.videoImages[sequence];

  const canvasWidth = objs.canvas.width;
  const canvasHeight = objs.canvas.height;
  const imgWidth = img.width;
  const imgHeight = img.height;

  let drawWidth, drawHeight;

  if (canvasWidth / canvasHeight > imgWidth / imgHeight) {
    drawHeight = canvasHeight;
    drawWidth = (imgWidth / imgHeight) * drawHeight;
  } else {
    drawWidth = canvasWidth;
    drawHeight = (imgHeight / imgWidth) * drawWidth;
  }

  const xOffset = (canvasWidth - drawWidth) / 2;
  const yOffset = (canvasHeight - drawHeight) / 2;
  return { canvasWidth, canvasHeight, xOffset, yOffset, drawWidth, drawHeight };
}

/** // TODO scrollLoop : currentScene 추적 */
export function scrollLoop(sceneInfo, currentScene, prevScrollHeight, yOffset) {
  prevScrollHeight = 0;
  let enterNewScene = false;

  console.log("에러 확인", currentScene, sceneInfo[currentScene].scrollHeight);

  for (let i = 0; i < currentScene; i++) {
    prevScrollHeight += sceneInfo[i].scrollHeight;
  }

  if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
    currentScene++;
    enterNewScene = true;
  }
  if (yOffset < prevScrollHeight) {
    if (currentScene === 0) return { currentScene, prevScrollHeight };
    enterNewScene = true;
    currentScene--;
  }

  document.body.setAttribute("id", `show-scene-${currentScene}`);

  if (enterNewScene) return { currentScene, prevScrollHeight };

  playAnimation(sceneInfo, currentScene, yOffset, prevScrollHeight);

  return { currentScene, prevScrollHeight };
}

/** // TODO calcValues : 해당 씬의 현재 스크롤 비율 */
export function calcValues(values, currentYOffset, sceneInfo, currentScene) {
  let rv;
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  let scrollRatio = currentYOffset / scrollHeight;

  if (values.length === 3) {
    const partScrollStart = values[2].start * scrollHeight;
    const partScrollEnd = values[2].end * scrollHeight;
    const partScrollHeight = partScrollEnd - partScrollStart;

    if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
      rv =
        ((currentYOffset - partScrollStart) / partScrollHeight) *
          (values[1] - values[0]) +
        values[0];
    } else if (currentYOffset < partScrollStart) {
      rv = values[0];
    } else if (currentYOffset > partScrollEnd) {
      rv = values[1];
    }
  } else {
    rv = scrollRatio * (values[1] - values[0]) + values[0];
  }
  return rv;
}

/** // TODO 애니메이션 처리 */
export function playAnimation(
  sceneInfo,
  currentScene,
  yOffset,
  prevScrollHeight
) {
  const objs = sceneInfo[currentScene].objs;
  const values = sceneInfo[currentScene].values;
  const currentYOffset = yOffset - prevScrollHeight;
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  const scrollRatio = currentYOffset / scrollHeight;

  console.log("current", currentScene, currentYOffset, sceneInfo[currentScene]);

  switch (currentScene) {
    case 0:
      // TODO text
      if (scrollRatio <= 0.22) {
        // in
        objs.messageA.style.opacity = calcValues(
          values.messageA_opacity_in,
          currentYOffset,
          sceneInfo,
          currentScene
        );
        objs.messageA.style.transform = `translate3d(0, ${calcValues(
          values.messageA_translateY_in,
          currentYOffset,
          sceneInfo,
          currentScene
        )}%, 0)`;
      } else {
        // out
        objs.messageA.style.opacity = calcValues(
          values.messageA_opacity_out,
          currentYOffset,
          sceneInfo,
          currentScene
        );
        objs.messageA.style.transform = `translate3d(0, ${calcValues(
          values.messageA_translateY_out,
          currentYOffset,
          sceneInfo,
          currentScene
        )}%, 0)`;
      }

      if (scrollRatio <= 0.42) {
        // in
        objs.messageB.style.opacity = calcValues(
          values.messageB_opacity_in,
          currentYOffset,
          sceneInfo,
          currentScene
        );
        objs.messageB.style.transform = `translate3d(0, ${calcValues(
          values.messageB_translateY_in,
          currentYOffset,
          sceneInfo,
          currentScene
        )}%, 0)`;
      } else {
        // out
        objs.messageB.style.opacity = calcValues(
          values.messageB_opacity_out,
          currentYOffset,
          sceneInfo,
          currentScene
        );
        objs.messageB.style.transform = `translate3d(0, ${calcValues(
          values.messageB_translateY_out,
          currentYOffset,
          sceneInfo,
          currentScene
        )}%, 0)`;
      }

      if (scrollRatio <= 0.62) {
        // in
        objs.messageC.style.opacity = calcValues(
          values.messageC_opacity_in,
          currentYOffset,
          sceneInfo,
          currentScene
        );
        objs.messageC.style.transform = `translate3d(0, ${calcValues(
          values.messageC_translateY_in,
          currentYOffset,
          sceneInfo,
          currentScene
        )}%, 0)`;
      } else {
        // out
        objs.messageC.style.opacity = calcValues(
          values.messageC_opacity_out,
          currentYOffset,
          sceneInfo,
          currentScene
        );
        objs.messageC.style.transform = `translate3d(0, ${calcValues(
          values.messageC_translateY_out,
          currentYOffset,
          sceneInfo,
          currentScene
        )}%, 0)`;
      }

      break;

    case 1:
      // TODO video
      let sequence = Math.round(
        calcValues(
          values.imageSequence,
          currentYOffset,
          sceneInfo,
          currentScene
        )
      );

      // objs.context.drawImage(objs.videoImages[sequence], 0, 0);
      // 이미지 사이즈 맞추기
      const context = objs.context;
      const img = objs.videoImages[sequence];

      const {
        canvasWidth,
        canvasHeight,
        xOffset,
        yOffset,
        drawWidth,
        drawHeight,
      } = setCanvasImageSize(objs, sequence);

      context.clearRect(0, 0, canvasWidth, canvasHeight); // 캔버스 초기화
      context.drawImage(img, xOffset, yOffset, drawWidth, drawHeight);
      break;

    case 2:
      console.log("1 play");
      break;
    case 3:
      console.log("2 play");
      break;

    default:
      break;
  }
}
