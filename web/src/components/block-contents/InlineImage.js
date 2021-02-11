import React from 'react';
import Img from 'gatsby-image';
import { Box, Paper, Typography } from '@material-ui/core';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import sanityConfig from '../../../sanityConfig';

function InlineImage({ image, alt }) {
  const imageFluid = image?.id;
  const fluidProps = getFluidGatsbyImage(imageFluid, {}, sanityConfig);
  const imageFilename = image?.asset?.originalFilename || 'image';

  return (
    <Paper component="figure" mb={2} mx="auto">
      <Img fluid={fluidProps} alt={alt} title={imageFilename} />
    </Paper>
  );
}

export default InlineImage;
