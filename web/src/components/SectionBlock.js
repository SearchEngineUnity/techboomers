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
  headingColor,
  subtitleColor,
  footerColor,
}) {
  return (
    <>
      <StructuredSectionHeader
        heading={heading}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionHeading={hasSectionHeading}
        hasSectionSubtitle={hasSectionSubtitle}
        headingColor={headingColor}
        subtitleColor={subtitleColor}
      />
      <SectionTextBlock blocks={sectionText} />
      <StructuredSectionFooter
        footer={footer}
        footerColor={footerColor}
        align={footerAlignment}
        hasSectionFooter={hasSectionFooter}
      />
    </>
  );
}
export default SectionBlock;
