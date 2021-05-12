import React from 'react';
import { Box } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Footer from './block-contents/SectionFooterSerializer';
// import { mapSectionFooterToProps } from '../lib/mapToProps';

function StructuredSectionFooter({ footer, colorOverrides, align, hasSectionFooter }) {
  return (
    <>
      {!hasSectionFooter && footer && (
        <Box
          component={hasSectionFooter ? 'div' : 'footer'}
          color={colorOverrides?.footer?.hex || colorOverrides?.foreground?.hex || 'text.primary'}
          mt={2}
          textAlign={align}
        >
          <Footer blocks={footer} />
        </Box>
      )}
    </>
  );
}

export default StructuredSectionFooter;
