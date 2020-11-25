import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../containers/layout';
import GuideHero from '../components/GuideHero';
import MpGuideToc from '../components/MpGuideToc';
import GuideBody from '../components/block-contents/GuideSerializer';
import SEO from '../components/Seo';

import { mapGuideHeroToProps, mapSeoToProps } from '../lib/mapToProps';

export const query = graphql`
  query mpGuideTemplate($slug: String) {
    guide: sanityMpGuide(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      twitter {
        description
        title
      }
      noindex
      nofollow
      canonical
      id
      heroImage {
        mainImage {
          alt
          image {
            asset {
              url
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      h1
      facebook {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      author {
        name
        job
      }
      _rawBody(resolveReferences: { maxDepth: 12 })
      description
      displayDate
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default ({ data, pageContext }) => {
  const type = 'guide';
  const url = `${data.site.siteMetadata.siteUrl}/${data.guide.slug.current}`;
  const { slug, chaptersArray } = pageContext;

  return (
    <Layout>
      <SEO {...mapSeoToProps(data.guide, data.site.siteMetadata.siteUrl, type)} />
      <GuideHero {...mapGuideHeroToProps(data.guide)} />
      <MpGuideToc
        currentSlug={slug}
        chaptersArray={chaptersArray}
        style={{ marginBottom: '24px', marginTop: '-164px', zIndex: '10' }}
      />
      <Container>
        <Row style={{ paddingTop: '32px' }}>
          <Col className="mx-auto col-md-8 col-12">
            <article>
              <GuideBody blocks={data.guide._rawBody} />
            </article>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
