import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Subtitle from './block-contents/H2SubtitleSerializer';
import SectionTextBlock from './block-contents/SectionBlockSerializer';
import StructuredSectionHeader from './StructuredSectionHeader';
import StructuredSectionFooter from './StructuredSectionFooter';

function SectionBlock({
  hasSectionHeading,
  hasSectionFooter,
  heading,
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
        heading={heading}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionH2={hasSectionHeading}
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
