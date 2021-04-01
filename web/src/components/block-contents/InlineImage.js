import React from 'react';
import { Box } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';
import { useWindowSize } from '../../hooks/useWindowSize';

function InlineImage({ image, alt }) {
  const imageFluid = image?.asset;
  const fluidProps = getGatsbyImageData(imageFluid, {}, sanityConfig);
  const windowSize = useWindowSize();
  const windowHeight = windowSize.height;
  const imageHeight = image?.asset?.metadata?.dimensions?.height;
  const customHeight = image?.height ? (image?.height / 100) * windowHeight : undefined;
  const maxHeight = customHeight && customHeight < imageHeight ? customHeight : imageHeight;

  return (
    <Box component="figure" justifyContent="center">
      <GatsbyImage
        image={fluidProps}
        alt={alt}
        style={{ display: 'block', maxHeight }}
        objectFit="contain"
      />
    </Box>
  );
}

export default InlineImage;
