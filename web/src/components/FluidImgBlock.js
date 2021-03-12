import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image/withIEPolyfill';

function FluidImgBlock({ image, alt, title, width, height, loading }) {
  const loadingSetting = loading || 'lazy';

  return (
    <Img
      fluid={image}
      alt={alt}
      title={title}
      loading={loadingSetting}
      fadeIn={false}
      objectFit="contain"
      style={{ maxHeight: height, maxWidth: width, marginLeft: 'auto', marginRight: 'auto' }}
    />
  );
}

export default FluidImgBlock;
