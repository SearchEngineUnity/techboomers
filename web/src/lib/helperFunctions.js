/* eslint-disable import/prefer-default-export */
export const determinColor = (color) => {
  console.log(color);
  if (!color) {
    return null;
  }
  if (color.alpha === 1) {
    return color.hex;
  }
  return color.hex + (color.alpha * 100).toString().padStart(2, '0');
};
