/** rgba 색상에서 rgb 색상만 반환 */
export const extractOpacity = (rgbaColor) => {
  const match = rgbaColor.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/);
  if (match) {
    const [r, g, b] = match.slice(1, 4);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return rgbaColor;
};
