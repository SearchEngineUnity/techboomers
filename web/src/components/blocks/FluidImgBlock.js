import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';

function FluidImgBlock({ image, alt, loading, maxHeight, maxWidth, caption }) {
  const loadingSetting = loading || 'lazy';
  const imageData = getGatsbyImageData(image, {}, sanityConfig);
  const customMaxHeight = maxHeight || 'auto';
  const customMaxWidth = maxWidth || 'auto';
  const imageWidth = image.metadata.dimensions.width;
  const imgAspectRatio = image.metadata.dimensions.aspectRatio;

  const calculatedWidthBasedOnCustomMaxWidth =
    customMaxWidth === '100%' ? imageWidth : customMaxWidth;

  const calculatedWidthBasedOnCustomMaxHeight =
    customMaxHeight === '100%' ? imageWidth : customMaxHeight * imgAspectRatio;

  const widthArray = [
    imageWidth,
    calculatedWidthBasedOnCustomMaxWidth,
    calculatedWidthBasedOnCustomMaxHeight,
  ];

  const minMaxWidth = Math.min(...widthArray);

  return (
    <Box component="figure" justifyContent="center" m={0} display="flex">
      <Box width={`${minMaxWidth}px`}>
        <GatsbyImage
          image={imageData}
          alt={alt}
          loading={loadingSetting}
          objectFit="contain"
          style={{
            display: 'block',
            maxHeight: customMaxHeight,
            maxWidth: customMaxWidth,
          }}
        />
        {caption && (
          <Typography variant="caption" component="figcaption">
            <em>{caption}</em>
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default FluidImgBlock;
