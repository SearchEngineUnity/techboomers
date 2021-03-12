/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useSpGuides = () => {
  const { guides } = useStaticQuery(
    graphql`
      query AllSpGuides {
        guides: allSanitySpGuide {
          nodes {
            _id
            _createdAt
            _updatedAt
            cardTitle
            cardImage {
              alt
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
                metadata {
                  dimensions {
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  const guidesAsCards = guides.nodes.map(
    ({ _id, cardTitle, cardImage, _createdAt, _updatedAt }) => ({
      _key: _id,
      title: cardTitle,
      image: cardImage,
      date: _updatedAt || _createdAt,
    }),
  );

  const dateSortedCards = guidesAsCards.sort((a, b) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA < dateB) {
      return 1;
    }

    if (dateA > dateB) {
      return -1;
    }

    return 0;
  });

  return dateSortedCards;
};
