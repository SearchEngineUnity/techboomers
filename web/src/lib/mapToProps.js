export function mapSeoToProps(
  { title, description, facebook, twitter, slug, noindex, nofollow, canonical, heroImage },
  siteUrl,
  type,
  mpUrl = '',
) {
  return {
    mpUrl,
    type,
    title,
    description,
    og: facebook,
    twitter,
    siteUrl,
    slug: slug.current,
    noindex,
    nofollow,
    canonical,
    heroImage,
  };
}

export function mapCtaFormToProps({ idTag, title, subtitle, form, _rawDisclaimer }) {
  return {
    id: idTag,
    title,
    subtitle,
    form,
    disclaimer: _rawDisclaimer,
  };
}

export function mapMainNavToProps({ menu }) {
  return {
    menu,
  };
}

export function mapGuideSegmentToProps({ idTag, title, subtitle, col, cards }) {
  return {
    id: idTag,
    title,
    subtitle,
    col,
    cards,
  };
}

export function mapGuideCardToProps({ h1, slug, excerpt, cardImage, displayDate }) {
  return {
    title: h1,
    date: displayDate,
    excerpt,
    image: cardImage?.mainImage?._rawAsset,
    imageAlt: cardImage?.mainImage?.alt,
    imageFilename: cardImage?.mainImage?._rawAsset?.originalFilename,
    url: `/${slug.current}`,
  };
}

export function mapFluidImgBlockToProps({ _rawAsset, alt, caption, maxHeight, maxWidth }) {
  return {
    image: _rawAsset,
    alt,
    caption,
    maxHeight,
    maxWidth,
  };
}

export function mapGuideHeroToProps({ h1, _rawSubtitle, displayDate, heroImage }) {
  return {
    h1,
    subtitle: _rawSubtitle,
    date: displayDate,
    image: heroImage,
  };
}

export function mapLrHeroToProps({ idTag, layout, blocks }) {
  return { idTag, layout, blocks };
}

export function mapHeroBlockToProps({ title, _rawSubtitle }) {
  return {
    h1: title,
    subtitle: _rawSubtitle,
  };
}

export function mapLearningSegmentToProps({ idTag }) {
  return {
    idTag,
  };
}

export function mapNavBrandToProps({ brandGroup, nav }) {
  return {
    url: nav?.slug?.current,
    brandGroup,
  };
}

export function mapNavItemToProps({ isButton, title, nav }) {
  return {
    isButton,
    url: nav?.slug?.current,
    title,
  };
}

export function mapNavGroupToProps({ title, nav, group }) {
  return {
    title,
    url: nav?.slug?.current,
    group,
  };
}

export function mapLrFlexToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  colorSettings,
  header,
  idTag,
  layout,
  reverseOrder,
}) {
  return {
    idTag,
    heading: header?.heading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    layout,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    reverseOrder,
    colorSettings,
  };
}

export function mapSectionBlockToProps({
  header,
  _rawText,
  _rawFooter,
  headerAlignment,
  footerAlignment,
}) {
  return {
    heading: header?.heading,
    subtitle: header?._rawSubtitle,
    sectionText: _rawText,
    footer: _rawFooter,
    headerAlignment,
    footerAlignment,
  };
}
