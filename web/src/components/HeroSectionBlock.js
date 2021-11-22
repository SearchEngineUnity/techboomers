import React from 'react';
import SectionTextBlock from './block-contents/HeroSectionBlockSerializer';
import HeroSectionHeader from './HeroSectionHeader';
import HeroSectionFooter from './HeroSectionFooter';

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
      <HeroSectionHeader
        heading={heading}
        subtitle={subtitle}
        align={headerAlignment}
        hasSectionHeading={hasSectionHeading}
        hasSectionSubtitle={hasSectionSubtitle}
        headingColor={headingColor}
        subtitleColor={subtitleColor}
      />
      <SectionTextBlock blocks={sectionText} />
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
