/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';

function Seo({
  type,
  title,
  description,
  og,
  twitter,
  siteUrl,
  slug,
  noindex,
  nofollow,
  canonical,
  heroImage,
  mpUrl,
}) {
  let metaURL = '';
  let ogType = '';
  const robots = `${nofollow ? 'nofollow' : ''} ${noindex ? 'noindex' : ''}`;

  switch (type) {
    case 'page':
      metaURL = slug === '/' ? siteUrl : `${siteUrl}/${slug}`;
      ogType = 'website';
      break;
    case 'chapter':
      metaURL = `${siteUrl}/${mpUrl}/${slug}`;
      ogType = 'article';
      break;
    default:
      break;
  }

  const ogTitle = og?.title || title;
  const ogDescription = og?.description || description;
  const ogImage = og?.image?.asset?.url || heroImage?.mainImage?.image?.asset?.url || '';

  const twitterTitle = twitter?.title || ogTitle || title;
  const twitterDescription = twitter?.description || ogDescription || description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={metaURL} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={ogImage} />
      {(noindex || nofollow) && <meta name="robots" content={robots} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}

export default Seo;
