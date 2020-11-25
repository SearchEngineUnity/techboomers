import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import SEO from '../components/Seo';
// import Grid from '../components/Grid';
// import Hero from '../components/Hero';

import { mapSeoToProps } from '../lib/mapToProps';
import SampleCardSegment from '../components/SampleCardSegment';

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
              image {
                asset {
                  fluid {
                    src
                  }
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
                <SampleCardSegment />
              );

            case 'hero':
              return (
                <div key={segment._key}>This is the Hero section</div>
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
