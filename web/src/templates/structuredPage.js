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
      sections {
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
        ... on SanityLearningSection {
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

const StructuredPage = ({ data, location }) => {
  const type = 'page';
  const spGuides = useSpGuides();

  return (
    <Layout location={location}>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <main>
        {data.page.sections.map((section) => {
          const { _type } = section;
          switch (_type) {
            case 'hero':
              return <div key={section._key}>This is the Hero section</div>;

            case 'learningSection': {
              return (
                <GridSegment
                  key={section._key}
                  {...mapLearningSegmentToProps(section)}
                  cards={spGuides}
                />
              );
            }

            case 'lrHero':
              return <LrHero key={section._key} {...mapLrHeroToProps(section)} />;
            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};

export default StructuredPage;
