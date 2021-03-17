import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../components/Seo';
import LrHero from '../components/LrHeroSegment';
import GridSegment from '../components/GridSegment';
import { useSpGuides } from '../hooks/useSpGuides';
import { mapLrHeroToProps, mapSeoToProps, mapLearningSegmentToProps } from '../lib/mapToProps';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      segments {
        ... on SanityHero {
          _key
          _type
          title
          heroBg {
            hex
          }
          heroMedia {
            ... on SanityIllustration {
              _key
              _type
              alt
              caption
              asset {
                metadata {
                  dimensions {
                    width
                    height
                  }
                }
                url
                fluid {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
            ... on SanityVideo {
              _key
              _type
              url
              title
            }
          }
          idTag
          mediaIsBg
          _rawSubtitle(resolveReferences: { maxDepth: 14 })
        }
        ... on SanityLearningSegment {
          _key
          _type
          idTag
        }
        ... on SanityLrHero {
          _key
          _type
          blocks {
            ... on SanityIllustration {
              _key
              _type
              alt
              asset {
                metadata {
                  dimensions {
                    width
                    height
                  }
                }
                fluid {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawSubtitle(resolveReferences: { maxDepth: 14 })
              title
            }
            ... on SanityVideo {
              _key
              _type
              title
              url
            }
          }
          idTag
          layout
        }
      }
      slug {
        current
      }
      title
      description
      twitter {
        description
        title
      }
      nofollow
      noindex
      facebook {
        description
        image {
          asset {
            url
          }
        }
        title
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default ({ data }) => {
  const type = 'page';

  let spGuides;

  if (data.page.segments.filter((el) => el._type === 'learningSegment')) {
    spGuides = useSpGuides();
  }

  return (
    <Layout>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <main>
        {data.page.segments.map((segment) => {
          const { _type } = segment;
          switch (_type) {
            case 'hero':
              return <div key={segment._key}>This is the Hero segment</div>;

            case 'learningSegment': {
              return (
                <GridSegment
                  key={segment._key}
                  {...mapLearningSegmentToProps(segment)}
                  cards={spGuides}
                />
              );
            }

            case 'lrHero':
              return <LrHero key={segment._key} {...mapLrHeroToProps(segment)} />;
            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};

// export default () => <h1>structured page placeholder</h1>;
