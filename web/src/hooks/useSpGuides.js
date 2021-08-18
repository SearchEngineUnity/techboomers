/* eslint-disable import/prefer-default-export */
import { useStaticQuery, graphql } from 'gatsby';

export const useSpGuides = () => {
  const { guides } = useStaticQuery(
    graphql`
      query AllSpGuides {
        guides: allSanitySpGuide(sort: { fields: [displayDate], order: DESC }) {
          nodes {
            _id
            slug {
              current
            }
            displayDate
            cardTitle
            cardImage {
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
            }
          }
        }
      }
    `,
  );

  const guidesAsCards = guides.nodes.map(({ _id, cardTitle, cardImage, displayDate, slug }) => ({
    _key: _id,
    title: cardTitle,
    image: cardImage,
    date: displayDate,
    url: slug.current,
  }));

  return guidesAsCards;
};
