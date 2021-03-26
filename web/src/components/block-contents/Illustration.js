import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';

function Illustration({ illustration }) {
  const imageFluid = illustration?.asset;
  const fluidProps = getGatsbyImageData(imageFluid, {}, sanityConfig);
  const { width, height } = illustration.asset.metadata.dimensions;
  const imageFilename = illustration?.asset?.originalFilename || 'image';

  return (
    <Box component="figure" mb={2} mx="auto">
      <GatsbyImage image={fluidProps} alt={illustration.alt} />
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
