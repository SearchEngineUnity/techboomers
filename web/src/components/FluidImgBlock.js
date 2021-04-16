import React from 'react';
import PropTypes from 'prop-types';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../sanityConfig';

function FluidImgBlock({ image, alt, loading, height }) {
  const loadingSetting = loading || 'lazy';
  const imageData = getGatsbyImageData(image, {}, sanityConfig);
  const maxHeight = height || 'auto';

  return (
    <GatsbyImage
      image={imageData}
      alt={alt}
      loading={loadingSetting}
      style={{ display: 'block', maxHeight }}
      objectFit="contain"
    />
    // <Img
    //   fluid={image}
    //   alt={alt}
    //   title={title}
    //   loading={loadingSetting}
    //   fadeIn={false}
    //   objectFit="contain"
    //   style={{ maxHeight: height, maxWidth: width, marginLeft: 'auto', marginRight: 'auto' }}
    // />
  );
}

export default FluidImgBlock;
