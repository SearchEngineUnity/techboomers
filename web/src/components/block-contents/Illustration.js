import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';

function Illustration({ illustration, zeroMy, zeroMx }) {
  const imageFluid = illustration?.asset;
  const fluidProps = getGatsbyImageData(imageFluid, {}, sanityConfig);
  const customMaxHeight = illustration.maxHeight || 'auto';
  const customMaxWidth = illustration.maxWidth || 'auto';
  const imageWidth = imageFluid.metadata.dimensions.width;
  const imgAspectRatio = imageFluid.metadata.dimensions.aspectRatio;

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

  const my = zeroMy ? 0 : '16px';
  const mx = zeroMx ? 0 : '40px';

  return (
    <Box component="figure" my={my} mx={mx} display="flex" justifyContent={illustration.align}>
      <Box width={minMaxWidth}>
        <GatsbyImage
          style={{
            maxHeight: customMaxHeight,
            maxWidth: customMaxWidth,
            display: 'block',
          }}
          image={fluidProps}
          // eslint-disable-next-line no-unneeded-ternary
          alt={illustration.alt ? illustration.alt : ''}
          objectFit="contain"
        />
        {illustration.caption && (
          <Typography component="figcaption" variant="caption">
            <em>{illustration.caption}</em>
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Illustration;
