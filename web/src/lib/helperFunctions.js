/* eslint-disable import/prefer-default-export */
export const determinColor = (color) => {
  console.log(color);
  if (color === undefined) {
    return null;
  }
  if (color.alpha === 1) {
    return color.hex;
  }
  return color.hex + color.alpha * 100;
};
