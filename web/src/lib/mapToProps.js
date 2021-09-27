export function mapSeoToProps(
  { title, description, metaFacebook, metaTwitter, slug, noindex, nofollow, canonical, heroImage },
  type,
) {
  return {
    type,
    title,
    description,
    metaFacebook,
    metaTwitter,
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

export function mapLrHeroToProps({
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

export function mapStackFlexToProps({
  _rawFooter,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  blocks,
  colorSettings,
  header,
  idTag,
  blockWidth,
}) {
  return {
    idTag,
    heading: header?.heading,
    subtitle: header?._rawSubtitle,
    blocks,
    footer: _rawFooter,
    blockWidth,
    blockAlignment,
    headerAlignment,
    footerAlignment,
    colorSettings,
  };
}

export function mapListingSectionToProps({
  _rawFooter,
  headerAlignment,
  footerAlignment,
  layout,
  colorSettings,
  header,
  idTag,
  tileOption,
}) {
  return {
    idTag,
    heading: header?.heading,
    subtitle: header?._rawSubtitle,
    footer: _rawFooter,
    layout,
    headerAlignment,
    footerAlignment,
    colorSettings,
    tileOption,
  };
}

export function mapMuiBtnToProps({ idTag, btnAlignment, link, text, design }) {
  return {
    idTag,
    text,
    variant: design?.settings?.variant,
    disableElevation: design?.settings?.disableElevation,
    disableFocusRipple: design?.settings?.disableFocusRipple,
    disableRipple: design?.settings?.disableRipple,
    fullWidth: design?.settings?.fullWidth,
    borderRadius: design?.settings?.borderRadius,
    padding: design?.settings?.padding,
    link,
    colors: design?.colors,
    alignment: btnAlignment,
    typography: design?.typography,
  };
}

export function mapGridFlexToProps({ layout, tiles, tileOption }) {
  return {
    layout,
    tiles,
    tileOption,
  };
}

export function mapFluidImgToProps({ _rawAsset, alt, caption, height }) {
  return {
    image: _rawAsset,
    alt,
    caption,
    maxHeight: height,
  };
}

export function mapBlockFormNetlifyToProps({ _rawFormNetlify, title, titleAlignment }) {
  return {
    title,
    align: titleAlignment,
    form: _rawFormNetlify,
  };
}
