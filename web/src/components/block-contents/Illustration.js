import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';

function Illustration({ illustration, table }) {
  const imageFluid = illustration?.asset;
  const fluidProps = getGatsbyImageData(imageFluid, {}, sanityConfig);
  const customMaxHeight = illustration.maxHeight || '100%';
  const customMaxWidth = illustration.maxWidth || '100%';
  const imageWidth = imageFluid.metadata.dimensions.width;
  const imgAspectRatio = imageFluid.metadata.dimensions.aspectRatio;
  // All image values example imageFluid.metadata.dimensions.height
  // In sanity check illustration under insertable.
  console.log(illustration.align);

  // 1. imageWidth(original) 2. width based on customMaxWidth 3. width based on customMaxHeight
  // 1 = imageWidth
  // 2 = customMaxWidth
  const calculatedWidthBasedOnCustomMaxWidth =
    customMaxWidth === '100%' ? imageWidth : customMaxWidth;
  // 3 = customMaxHeight to calculate custom maxWidth
  // aspectratio = wdith/ height
  const calculatedWidthBasedOnCustomMaxHeight =
    customMaxHeight === '100%' ? imageWidth : customMaxHeight * imgAspectRatio;

  const widthArray = [
    imageWidth,
    calculatedWidthBasedOnCustomMaxWidth,
    calculatedWidthBasedOnCustomMaxHeight,
  ];

  const minMaxWidth = Math.min(...widthArray);

  const my = table ? 0 : '16px';

  const mx = table ? 0 : '40px';

  return (
    <Box component="figure" my={my} mx={mx} display="flex" justifyContent={illustration.align}>
      <Box width={`${minMaxWidth}px`}>
        <GatsbyImage
          style={{
            maxHeight: customMaxHeight,
            maxWidth: customMaxWidth,
            display: 'block',
          }}
          image={fluidProps}
          alt={illustration.alt}
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
