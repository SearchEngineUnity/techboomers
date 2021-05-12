import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Subtitle from './block-contents/H2SubtitleSerializer';
import SectionTextBlock from './block-contents/SectionBlockSerializer';
import StructuredSectionHeader from './StructuredSectionHeader';
import StructuredSectionFooter from './StructuredSectionFooter';

function SectionBlock({
  hasSectionH2,
  hasSectionFooter,
  h2,
  subtitle,
  sectionText,
  footer,
  headerAlignment,
  footerAlignment,
  colorOverrides,
}) {
  return (
    <>
      <StructuredSectionHeader
        h2={h2}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionH2={hasSectionH2}
        colorOverrides={colorOverrides}
      />
      <SectionTextBlock blocks={sectionText} />
      <StructuredSectionFooter
        footer={footer}
        colorOverrides={colorOverrides}
        align={footerAlignment}
        hasSectionFooter={hasSectionFooter}
      />
    </>
  );
}

export default SectionBlock;
