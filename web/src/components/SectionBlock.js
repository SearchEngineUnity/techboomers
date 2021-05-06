import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Subtitle from './block-contents/H2SubtitleSerializer';
import SectionTextBlock from './block-contents/SectionBlockSerializer';

function SectionBlock({ h2, title, subtitle, sectionText, colorOverrides }) {
  return (
    <>
      {title && (
        <header>
          <Box
            color={colorOverrides?.title?.hex || colorOverrides?.foreground?.hex || 'text.primary'}
          >
            <Typography variant="h2" gutterBottom>
              {title}
            </Typography>
          </Box>
          <Box
            color={
              colorOverrides?.subtitle?.hex || colorOverrides?.foreground?.hex || 'text.primary'
            }
          >
            <Subtitle blocks={subtitle} />
          </Box>
        </header>
      )}
      {h2 && subtitle && (
        <Box
          color={colorOverrides?.subtitle?.hex || colorOverrides?.foreground?.hex || 'text.primary'}
        >
          <Subtitle blocks={subtitle} />
        </Box>
      )}
      <SectionTextBlock blocks={sectionText} />
    </>
  );
}

export default SectionBlock;
