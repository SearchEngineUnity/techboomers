import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import sanityConfig from '../../../sanityConfig';

function InlineImage({ image, alt }) {
  return (
    <Box component="figure" mb={2} mx="auto">
      <div style={{ color: 'red' }}>Inline Image does not currently work</div>
    </Box>
  );
}

export default InlineImage;
