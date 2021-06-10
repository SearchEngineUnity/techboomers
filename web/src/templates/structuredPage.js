import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import SEO from '../components/Seo';
import LrHero from '../components/LrHeroSegment';
import GridSegment from '../components/GridSegment';
import LrFlex from '../components/StructuredLrFlex';
import { useSpGuides } from '../hooks/useSpGuides';
import {
  mapLrHeroToProps,
  mapSeoToProps,
  mapLearningSegmentToProps,
  mapLrFlexToProps,
} from '../lib/mapToProps';

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
            ... on SanityVideoBlock {
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
            ... on SanityVideoBlock {
              _key
              _type
              title
              url
            }
          }
          idTag
          layout
        }
        ... on SanityLrFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockAlignment
          headerAlignment
          footerAlignment
          blocks {
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              caption
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
          }
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          idTag
          layout
          reverseOrder
          colorOverrides {
            background {
              color {
                hex
                alpha
              }
            }
            footer {
              color {
                hex
                alpha
              }
            }
            foreground {
              color {
                hex
                alpha
              }
            }
            heading {
              color {
                hex
                alpha
              }
            }
            link {
              color {
                hex
                alpha
              }
            }
            subtitle {
              color {
                alpha
                hex
              }
            }
          }
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

            case 'lrFlex':
              return <LrFlex key={section._key} {...mapLrFlexToProps(section)} />;

            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};

export default StructuredPage;
