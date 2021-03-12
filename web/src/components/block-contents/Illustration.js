import React from 'react';
import Img from 'gatsby-image';
import { Paper, Typography } from '@material-ui/core';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import sanityConfig from '../../../sanityConfig';

function Illustration({ illustration }) {
  const imageFluid = illustration?.asset?.id;
  const fluidProps = getFluidGatsbyImage(imageFluid, {}, sanityConfig);
  const { width, height } = illustration.asset.metadata.dimensions;
  const imageFilename = illustration?.asset?.originalFilename || 'image';

  return (
    <Paper component="figure" mb={2} mx="auto">
      <Img
        fluid={fluidProps}
        objectFit="contain"
        style={{ maxHeight: height, maxWidth: width, marginLeft: 'auto', marginRight: 'auto' }}
        alt={illustration.alt}
        title={imageFilename}
      />
      {illustration.caption && (
        <Typography component="figcaption" variant="body1">
          {illustration.caption}
        </Typography>
      )}
    </Paper>
  );
}

export default Illustration;
