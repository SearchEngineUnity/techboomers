import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Subtitle from './block-contents/H2SubtitleSerializer';
import SectionTextBlock from './block-contents/SectionBlockSerializer';
import StructuredSectionHeader from './StructuredSectionHeader';
import StructuredSectionFooter from './StructuredSectionFooter';

function SectionBlock({
  hasSectionHeading,
  hasSectionSubtitle,
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
        hasSectionHeading={hasSectionHeading}
        hasSectionSubtitle={hasSectionSubtitle}
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
