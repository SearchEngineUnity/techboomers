import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Subtitle from './block-contents/H2SubtitleSerializer';

function StructuredSectionHeader({ h2, subtitle, colorOverrides }) {
  return (
    h2 && (
      <Box component="header" mb={2}>
        <Box
          component={Typography}
          variant="h2"
          gutterBottom
          color={colorOverrides?.title?.hex || colorOverrides?.foreground?.hex || 'text.primary'}
        >
          {h2}
        </Box>

        <Box
          color={colorOverrides?.subtitle?.hex || colorOverrides?.foreground?.hex || 'text.primary'}
        >
          <Subtitle blocks={subtitle} />
        </Box>
      </Box>
    )
  );
}

export default StructuredSectionHeader;
