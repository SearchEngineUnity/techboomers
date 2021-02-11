import React from 'react';
import Img from 'gatsby-image';
import { Box, Paper, Typography } from '@material-ui/core';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import sanityConfig from '../../../sanityConfig';

function Illustration({ illustration }) {
  const imageFluid = illustration?.asset?.id;
  const fluidProps = getFluidGatsbyImage(imageFluid, {}, sanityConfig);
  const imageFilename = illustration?.asset?.originalFilename || 'image';

  return (
    <Paper component="figure" mb={2} mx="auto">
      <Img fluid={fluidProps} alt={illustration.alt} title={imageFilename} />
      {illustration.caption && (
        <Typography component="figcaption" variant="body1">
          {illustration.caption}
        </Typography>
      )}
    </Paper>
  );
}

export default Illustration;
