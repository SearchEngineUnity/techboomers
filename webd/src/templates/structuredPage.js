import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../components/Seo';
// import Grid from '../components/Grid';
// import Hero from '../components/Hero';
import ListingHero from '../components/ListingHero';
import LearnListSegment from '../components/LearnListSegment';
// import SampleCardSegment from '../components/SampleCardSegment';

import { mapHeroToProps, mapSeoToProps } from '../lib/mapToProps';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      segments {
        ... on SanityGrid {
          _key
          _type
          col
          design
          title
          subTitle
          cards {
            _key
            cardImage {
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            description
            title
            btnText
            cardLink {
              externalLink {
                href
              }
              internalLink {
                reference {
                  ... on SanityGuide {
                    _type
                    slug {
                      current
                    }
                  }
                  ... on SanityMpGuide {
                    _type
                    slug {
                      current
                    }
                  }
                  ... on SanityPage {
                    _type
                    slug {
                      current
                    }
                  }
                }
              }
            }
          }
          _rawFooter(resolveReferences: { maxDepth: 10 })
        }
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
                url
                fluid {
                  ...GatsbySanityImageFluid
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
        ... on SanityBlockSegment {
          _key
          _type
          idTag
          _rawContent(resolveReferences: { maxDepth: 14 })
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
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            ... on SanityTextBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 14 })
              subtitle
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

  return (
    <Layout>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <main>
        {data.page.segments.map((segment) => {
          const { _type } = segment;
          switch (_type) {
            case 'grid':
              return (
                // <div>This is the Grid section</div>
                // <Article id={section._key} {...mapArticleToProps(section)} />
                // <SampleCardSegment />
                <div key={segment._key}>This is the Grid segment</div>
              );

            case 'hero':
              return (
                <ListingHero key={segment._key} {...mapHeroToProps(segment)} />
                // <Hero id={section._key} {...mapHeroToProps(section)} />
              );

            case 'learningSegment':
              return (
                <LearnListSegment key={segment._key} id={segment.idTag} />
                // <Hero id={section._key} {...mapHeroToProps(section)} />
              );

            case 'lrHero':
              return (
                <div key={segment._key}>This is the LR Hero segment</div>
                // <Hero id={section._key} {...mapHeroToProps(section)} />
              );
            case 'blockSegment':
              return (
                <div key={segment._key}>This is the block segment</div>
                // <Hero id={section._key} {...mapHeroToProps(section)} />
              );
            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};
