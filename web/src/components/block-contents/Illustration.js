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
  const imageHeight = imageFluid.metadata.dimensions.height;
  // All image values example imageFluid.metadata.dimensions.height
  // In sanity check illustration under insertable.
  console.log(imageFluid);

  return (
    <Box component="figure">
      <Box
        display="flex"
        justifyContent="flex-start"
        my={table ? 0 : '16px'}
        mx={table ? 0 : '40px'}
      >
        <GatsbyImage
          style={{
            maxHeight: customMaxHeight,
            maxWidth: customMaxWidth,
            imageHeight,
            display: 'block',
          }}
          image={fluidProps}
          alt={illustration.alt}
          objectFit="contain"
        />
      </Box>
      {illustration.caption && (
        <Box display="flex" justifyContent="center" my={table ? 0 : '16px'} mx={table ? 0 : '40px'}>
          <div style={{ width: '500px' }}>
            <Typography component="figcaption" variant="caption">
              {illustration.caption}
            </Typography>
          </div>
        </Box>
      )}
    </Box>
  );
}

export default Illustration;
