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
    <>
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
        <Box textAlign="center" mt={1}>
          <Typography variant="caption">{caption}</Typography>
        </Box>
      )}
    </>
  );
}

export default FluidImgBlock;
