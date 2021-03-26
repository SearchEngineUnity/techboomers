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
              _rawAsset(resolveReferences: { maxDepth: 10 })
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
              _rawAsset(resolveReferences: { maxDepth: 10 })
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

const StructuredPage = ({ data }) => {
  const type = 'page';

  const spGuides = useSpGuides();

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

export default StructuredPage;
