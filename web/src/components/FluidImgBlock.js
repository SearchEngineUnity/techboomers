import React from 'react';
import PropTypes from 'prop-types';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../sanityConfig';

function FluidImgBlock({ image, alt, title, width, height, loading }) {
  const loadingSetting = loading || 'lazy';
  const imageData = getGatsbyImageData(image, {}, sanityConfig);

  return (
    <GatsbyImage image={imageData} alt={alt} />
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
