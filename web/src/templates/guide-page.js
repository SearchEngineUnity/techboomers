import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'react-bootstrap';
import Layout from '../containers/layout';
import GuideCard from '../components/GuideCard';
import SEO from '../components/Seo';

import { mapGuideCardToProps, mapSeoToProps } from '../lib/mapToProps'; // eslint-disable-line

export const query = graphql`
  query GuideTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
      slug {
        current
      }
    }
    guides: allSanityGuide(filter: { isChapter: { ne: true } }) {
      nodes {
        id
        h1
        displayDate
        slug {
          current
        }
        excerpt {
          short
        }
        cardImage {
          mainImage {
            alt
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
    mpGuides: allSanityMpGuide {
      nodes {
        id
        h1
        displayDate
        slug {
          current
        }
        excerpt {
          short
        }
        cardImage {
          mainImage {
            alt
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
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
  const guidesOfAllTypes = [...data.guides.nodes, ...data.mpGuides.nodes];

  const sortedGuidesOfAllTypes = [...guidesOfAllTypes].sort((a, b) => {
    if (a.displayDate < b.displayDate) {
      return 1;
    }

    if (a.displayDate > b.displayDate) {
      return -1;
    }

    return 0;
  });

  return (
    <Layout>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <Container>
        <div className="row">
          {sortedGuidesOfAllTypes.map((guide) => {
            return <GuideCard key={guide.id} {...mapGuideCardToProps(guide)} />;
          })}
        </div>
      </Container>
    </Layout>
  );
};
