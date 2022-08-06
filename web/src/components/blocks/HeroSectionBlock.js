import React from 'react';
import { Box } from '@material-ui/core';
import SectionTextBlock from '../portableText/serializer/HeroSectionBlockSerializer';
import HeroSectionHeader from '../sections/HeroSectionHeader';
import HeroSectionFooter from '../sections/HeroSectionFooter';

function SectionBlock({
  hasSectionHeading,
  hasSectionSubtitle,
  hasSectionFooter,
  heading,
  subtitle,
  sectionText,
  footer,
  headerAlignment,
  textAlignment,
  footerAlignment,
  headingColor,
  subtitleColor,
  footerColor,
}) {
  return (
    <>
      <HeroSectionHeader
        heading={heading}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionHeading={hasSectionHeading}
        hasSectionSubtitle={hasSectionSubtitle}
        headingColor={headingColor}
        subtitleColor={subtitleColor}
      />
      <Box textAlign={textAlignment}>
        <SectionTextBlock blocks={sectionText} />
      </Box>
      <HeroSectionFooter
        footer={footer}
        footerColor={footerColor}
        align={footerAlignment}
        hasSectionFooter={hasSectionFooter}
      />
    </>
  );
}
export default SectionBlock;
