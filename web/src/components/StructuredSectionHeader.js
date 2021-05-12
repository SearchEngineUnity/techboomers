import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Subtitle from './block-contents/H2SubtitleSerializer';

function StructuredSectionHeader({ h2, subtitle, colorOverrides, align, hasSectionH2 }) {
  console.log(hasSectionH2);
  return (
    <>
      {h2 || subtitle ? (
        <Box component={hasSectionH2 ? 'div' : 'header'} mb={2} textAlign={align}>
          {!hasSectionH2 && h2 && (
            <Box
              component={Typography}
              variant="h2"
              gutterBottom
              color={
                colorOverrides?.title?.hex || colorOverrides?.foreground?.hex || 'text.primary'
              }
            >
              {h2}
            </Box>
          )}

          {subtitle && (
            <Box
              color={
                colorOverrides?.subtitle?.hex || colorOverrides?.foreground?.hex || 'text.primary'
              }
            >
              <Subtitle blocks={subtitle} />
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
}

export default StructuredSectionHeader;
