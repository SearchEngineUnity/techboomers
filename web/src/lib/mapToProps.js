export function mapHeroToProps({ idTag, title, _rawSubtitle, heroMedia, heroBg, mediaIsBg }) {
  return {
    id: idTag,
    title,
    heroText: _rawSubtitle,
    mediaType: heroMedia[0]?._type,
    video: heroMedia[0]?.url,
    image: heroMedia[0]?.asset?.fluid,
    imageAlt: heroMedia[0]?.asset.alt,
    imageURL: heroMedia[0]?.asset.url,
    backgroundColor: heroBg?.hex,
    mediaIsBg,
  };
}

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

export function mapMainFooterToProps({ name }, { title, logo }, allSanitySocialInfo) {
  return {
    name,
    logo: logo.asset.url,
    brandName: title,
    social: allSanitySocialInfo.edges,
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
    image: cardImage?.mainImage?.asset?.fluid,
    imageAlt: cardImage?.mainImage?.alt,
    imageFilename: cardImage?.mainImage?.asset?.originalFilename,
    url: `/${slug.current}`,
  };
}

export function mapFluidImgBlockToProps({ asset, alt }) {
  return {
    image: asset?.fluid,
    alt,
    title: asset?.originalFilename,
    width: asset?.metadata?.dimensions?.width,
    height: asset?.metadata?.dimensions?.height,
  };
}

export function mapGuideHeroToProps({ h1, _rawSubtitle, _createdAt, _updatedAt, heroImage }) {
  return {
    h1,
    subtitle: _rawSubtitle,
    date: _updatedAt || _createdAt,
    image: heroImage,
  };
}
