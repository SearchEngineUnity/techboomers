import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../sanityConfig';

function TileImage({ image, alt }) {
  const ratio = 16 / 9;
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
      aspectRatio: ratio,
    },
    sanityConfig,
  );

  return <GatsbyImage image={imageData} alt={alt} loading="lazy" />;
}

export default TileImage;
