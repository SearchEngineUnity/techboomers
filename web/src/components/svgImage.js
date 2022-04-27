import React from 'react';

function SvgImgBlock({ imageUrl, alt, loading, maxHeight, maxWidth }) {
  const loadingSetting = loading || 'lazy';
  console.log(maxWidth);
  return (
    <img
      style={{
        maxHeight,
        maxWidth,
        display: 'block',
        width: '100%',
        height: 'auto',
      }}
      loading={loadingSetting}
      src={imageUrl}
      // eslint-disable-next-line no-unneeded-ternary
      alt={alt ? alt : ''}
      objectFit="contain"
    />
  );
}

export default SvgImgBlock;
