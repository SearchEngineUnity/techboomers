import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../sanityConfig';

function FluidImgBlock({ image, alt, loading, maxHeight, maxWidth, caption }) {
  const loadingSetting = loading || 'lazy';
  const imageData = getGatsbyImageData(image, {}, sanityConfig);
  const customMaxHeight = maxHeight || 'auto';
  const customMaxWidth = maxWidth || 'auto';

  return (
    <Box component="figure" justifyContent="center">
      <GatsbyImage
        image={imageData}
        alt={alt}
        loading={loadingSetting}
        style={{
          display: 'block',
          maxHeight: customMaxHeight,
          maxWidth: customMaxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        objectFit="contain"
      />
      {caption && (
        <Typography variant="caption" component="figcaption">
          {caption}
        </Typography>
      )}
    </Box>
  );
}

export default FluidImgBlock;
