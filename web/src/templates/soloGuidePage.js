import React from 'react';
import { graphql } from 'gatsby';
import { Container, Grid, Box, Hidden } from '@material-ui/core';
import Layout from '../containers/layout';
import GuideHero from '../components/sections/GuideHero';
import GuideBody from '../components/block-contents/serializer/GuideSerializer';
import ToC from '../components/TableOfContent';
import Seo from '../components/Seo';

import { mapGuideHeroToProps, mapSeoToProps } from '../lib/mapToProps';

export const query = graphql`
  query soloGuidePageTemplate($slug: String) {
    guide: sanitySoloGuidePage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      displayDate
      pageTitle
      twitterShareMetaPack {
        twitterShareImage {
          asset {
            url
          }
        }
        twitterShareDescription
        twitterShareTitle
      }
      noindex
      nofollow
      canonical
      id
      h1
      fbShareMetaPack {
        fbShareTitle
        fbShareDescription
        fbShareImage {
          asset {
            url
          }
        }
      }
      _rawGuideBody(resolveReferences: { maxDepth: 14 })
      toc {
        _key
        title
        hashID
      }
      metaDescription
      heroImage {
        alt
        _rawAsset(resolveReferences: { maxDepth: 10 })
        maxHeight
        maxWidth
        caption
      }
      _rawHeroSubtitle(resolveReferences: { maxDepth: 10 })
    }
  }
`;

const SPGuide = ({ data, location }) => {
  const type = 'guide';

  return (
    <Layout location={location}>
      <Seo {...mapSeoToProps(data.guide, type)} />
      <main>
        <GuideHero {...mapGuideHeroToProps(data.guide)} />
        <Box my={3}>
          <Container maxWidth="lg">
            <Grid container spacing={3} direction="row-reverse">
              <Hidden smDown>
                <Grid item md={3} component="nav">
                  <ToC toc={data.guide.toc} />
                </Grid>
              </Hidden>
              <Grid item md={9} xs={12} component="article">
                <GuideBody blocks={data.guide._rawGuideBody} />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </Layout>
  );
};

export default SPGuide;
