import React from 'react';
import { Box } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Footer from './block-contents/SectionFooterSerializer';
// import { mapSectionFooterToProps } from '../lib/mapToProps';

function StructuredSectionFooter({ footer, colorOverrides }) {
  return (
    <Box
      component="footer"
      color={colorOverrides?.footer?.hex || colorOverrides?.foreground?.hex || 'text.primary'}
      mt={2}
    >
      <Footer blocks={footer} />
    </Box>
  );
}

export default StructuredSectionFooter;
