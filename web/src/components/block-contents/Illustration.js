import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';
import { useWindowSize } from '../../hooks/useWindowSize';

function Illustration({ illustration, table }) {
  const imageFluid = illustration?.asset;
  const fluidProps = getGatsbyImageData(imageFluid, {}, sanityConfig);
  const windowSize = useWindowSize();
  const windowHeight = windowSize.height;
  const imageHeight = illustration?.asset?.metadata?.dimensions?.height;
  const customHeight = illustration?.height
    ? (illustration?.height / 100) * windowHeight
    : undefined;
  const maxHeight = customHeight && customHeight < imageHeight ? customHeight : imageHeight;

  return (
    <Box component="figure" justifyContent="center" mt={table ? 0 : '16px'}>
      <GatsbyImage
        image={fluidProps}
        alt={illustration.alt}
        style={{ display: 'block', maxHeight }}
        objectFit="contain"
      />
      {/* <Img
        fluid={fluidProps}
        objectFit="contain"
        style={{ maxHeight: height, maxWidth: width, marginLeft: 'auto', marginRight: 'auto' }}
        alt={illustration.alt}
        title={imageFilename}
      /> */}
      {illustration.caption && (
        <Typography component="figcaption" variant="body1">
          {illustration.caption}
        </Typography>
      )}
    </Box>
  );
}

export default Illustration;
