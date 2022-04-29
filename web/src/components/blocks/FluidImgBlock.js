import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';
import SvgImgBlock from '../SvgImage';

function FluidImgBlock({ image, alt, loading, maxHeight, maxWidth, caption }) {
  const loadingSetting = loading || 'lazy';
  const imageData = getGatsbyImageData(image, {}, sanityConfig);
  const customMaxHeight = maxHeight || 'auto';
  const customMaxWidth = maxWidth || 'auto';
  const imageWidth = image.metadata.dimensions.width;
  const imgAspectRatio = image.metadata.dimensions.aspectRatio;
  const isSVG = image.extension === 'svg';

  const calculatedWidthBasedOnCustomMaxWidth =
    customMaxWidth === 'auto' ? imageWidth : customMaxWidth;

  const calculatedWidthBasedOnCustomMaxHeight =
    customMaxHeight === 'auto' ? imageWidth : customMaxHeight * imgAspectRatio;

  const widthArray = [
    imageWidth,
    calculatedWidthBasedOnCustomMaxWidth,
    calculatedWidthBasedOnCustomMaxHeight,
  ];

  let minMaxWidth = `${Math.min(...widthArray)}px`;

  if (minMaxWidth === `${imageWidth}px`) {
    minMaxWidth = 'auto';
  }

  return (
    <Box component="figure" justifyContent="center" m={0} display="flex">
      <Box width={minMaxWidth}>
        {isSVG ? (
          <SvgImgBlock
            imageUrl={image.url}
            // eslint-disable-next-line no-unneeded-ternary
            alt={alt ? alt : ''}
            loading={loadingSetting}
            objectFit="contain"
            maxWidth={customMaxWidth}
            maxHeight={customMaxHeight}
          />
        ) : (
          <GatsbyImage
            image={imageData}
            // eslint-disable-next-line no-unneeded-ternary
            alt={alt ? alt : ''}
            loading={loadingSetting}
            objectFit="contain"
            style={{
              display: 'block',
              maxHeight: customMaxHeight,
              maxWidth: customMaxWidth,
            }}
          />
        )}

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
