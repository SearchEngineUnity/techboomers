import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';

function Illustration({ illustration, table }) {
  const imageFluid = illustration?.asset;
  const fluidProps = getGatsbyImageData(imageFluid, {}, sanityConfig);
  const customMaxHeight = illustration.maxHeight || 'auto';
  const customMaxWidth = illustration.maxWidth || 'auto';

  return (
    <Box component="figure" justifyContent="center" my={table ? 0 : '16px'} mx={table ? 0 : '40px'}>
      <GatsbyImage
        image={fluidProps}
        alt={illustration.alt}
        objectFit="contain"
        style={{
          display: 'block',
          maxHeight: customMaxHeight,
          maxWidth: customMaxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      />
      {illustration.caption && (
        <Typography component="figcaption" variant="caption">
          {illustration.caption}
        </Typography>
      )}
    </Box>
  );
}

export default Illustration;
