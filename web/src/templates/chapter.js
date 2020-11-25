import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container, Row, Button } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { LinkedinIcon } from 'react-share';
import Layout from '../containers/layout';
import GuideBody from '../components/block-contents/GuideSerializer';
import ToC from '../components/TableOfContent';
import SEO from '../components/Seo';

import { mapSeoToProps } from '../lib/mapToProps';

export const query = graphql`
  query chapter($slug: String) {
    guide: sanityGuide(slug: { current: { eq: $slug } }) {
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
      toc {
        _key
        header
        title
        type
      }
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
  const type = 'chapter';
  const { slug, chaptersArray, mpTitle } = pageContext;

  const mpUrl = chaptersArray[0].link;
  const url = `${data.site.siteMetadata.siteUrl}${mpUrl}/${slug}`;

  const index = chaptersArray.findIndex(
    (chapter) => chapter.link === `${chaptersArray[0].link}/${slug}`,
  );
  const formattedIndex = `0${index}`.slice(-2);
  const maxChapter = chaptersArray.length - 1;
  const formattedMaxChapter = `0${maxChapter}`.slice(-2);

  const prev = index === 1 ? null : index - 1;
  const formattedPrev = `0${prev}`.slice(-2);
  const prevUrl = index === 1 ? null : chaptersArray[prev].link;
  const next = index === chaptersArray.length - 1 ? null : index + 1;
  const formattedNext = `0${next}`.slice(-2);
  const nextUrl = index === chaptersArray.length - 1 ? null : chaptersArray[next].link;

  const date = new Date(data.guide.displayDate);
  const dateTimeFormat = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Layout>
      <SEO {...mapSeoToProps(data.guide, data.site.siteMetadata.siteUrl, type, mpUrl)} />
      <Container>
        <div className="row">
          {data.guide.toc && (
            <div className="col-lg-2 col-md-12">
              <ToC toc={data.guide.toc} />
            </div>
          )}
          <article className="mx-auto col-lg-8 col-md-12">
            <h4>{mpTitle}</h4>
            <hr
              style={{ borderWidth: '3px', borderColor: '#20D340', width: '300px' }}
              className="mx-0"
            />
            <h5 className="py-4">
              <Link to={chaptersArray[0].link}>Introduction</Link>
              <span style={{ color: '#20D340' }}> / </span>
              <span style={{ fontWeight: 'bold' }}>
                Chapter {formattedIndex} of {formattedMaxChapter}
              </span>
            </h5>
            <h1>{data.guide.h1}</h1>
            <h6>
              By <span style={{ fontWeight: 'bold' }}>{data.guide.author.name}</span>{' '}
              {data.guide.author.job}
            </h6>
            <h6>Last updated: {dateTimeFormat.format(date)}</h6>
            <GuideBody blocks={data.guide._rawBody} />
            <hr />
            <Row>
              {prev && (
                <div className="col-auto mr-auto">
                  <Link variant="outline-success" to={prevUrl}>
                    <FaArrowLeft />
                    {`   Read Chapter ${formattedPrev}`}
                  </Link>
                </div>
              )}
              {next && (
                <div className="col-auto ml-auto">
                  <Link variant="success" to={nextUrl}>
                    {`Read Chapter ${formattedNext}   `}
                    <FaArrowRight />
                  </Link>
                </div>
              )}
            </Row>
          </article>
          <div className="col-lg-2 col-md-12" />
        </div>
      </Container>
    </Layout>
  );
};
