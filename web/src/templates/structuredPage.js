import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import SEO from '../components/Seo';
import Grid from '../components/Grid';
import Hero from '../components/Hero';
import Form from '../components/CtaForm';
import {
  mapSeoToProps,
  mapGuideSegmentToProps,
  mapHeroToProps,
  mapCtaFormToProps,
} from '../lib/mapToProps';
// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query PageTemplate($slug: String) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
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
      segments {
        ... on SanityBlockSegment {
          _key
          _type
          idTag
          _rawContent(resolveReferences: { maxDepth: 10 })
        }
        ... on SanityCtaForm {
          _key
          _type
          idTag
          subtitle
          title
          _rawDisclaimer(resolveReferences: { maxDepth: 10 })
          form {
            _key
            formFields {
              ... on SanityInput {
                _key
                _type
                inputType
                label
                name
                placeholder
                required
              }
              ... on SanityTextarea {
                _key
                _type
                label
                name
                placeholder
                required
                rows
              }
            }
            name
            submit
          }
        }
        ... on SanityGuideSegment {
          _key
          _type
          cards {
            _id
            pdf {
              asset {
                url
                title
              }
            }
            platform {
              name
              logo {
                asset {
                  url
                }
              }
              device
            }
            title
            software {
              name
              logo {
                asset {
                  url
                }
              }
            }
          }
          idTag
          col
          title
          subtitle
        }
        ... on SanityHero {
          _key
          _type
          idTag
          mediaIsBg
          heroBg {
            hex
          }
          heroMedia {
            ... on SanityIllustration {
              _key
              _type
              asset {
                url
              }
              alt
            }
            ... on SanityVideo {
              _key
              _type
              url
              title
            }
          }
          title
          _rawSubtitle(resolveReferences: { maxDepth: 10 })
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
  return (
    <Layout>
      <SEO {...mapSeoToProps(data.page, data.site.siteMetadata.siteUrl, type)} />
      <main>
        {data.page.segments.map((segment) => {
          const { _type } = segment;
          switch (_type) {
            case 'blockSegment':
              return <div>This is a block segment</div>;
            case 'guideSegment':
              return <Grid key={segment._key} {...mapGuideSegmentToProps(segment)} />;
            case 'ctaForm':
              return <Form key={segment._key} {...mapCtaFormToProps(segment)} />;
            case 'hero':
              return <Hero key={segment._key} {...mapHeroToProps(segment)} />;
            default:
              return <div key="default"> Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};
