import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import GuideCard from './GuideCard';
import { mapGuideCardToProps } from '../lib/mapToProps';

const Segment = ({ data }) => {
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
    <Container as="section">
      <Row>
        {sortedGuidesOfAllTypes.map((guide) => {
          return <GuideCard key={guide.id} {...mapGuideCardToProps(guide)} />;
        })}
      </Row>
    </Container>
  );
};

export default function LearnListSegment(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
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
                  asset {
                    fluid {
                      ...GatsbySanityImageFluid
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
      `}
      render={(data) => <Segment data={data} {...props} />}
    />
  );
}

// Segment.propTypes = {
//   data: PropTypes.shape({
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// };
