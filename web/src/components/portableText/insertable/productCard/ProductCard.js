import React from 'react';
import { Card, Grid, Button, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ProductCardSection from './ProductCardSection';
import ProductCardDivider from './ProductCardDivider';
import sanityConfig from '../../../../../sanityConfig';
// import { mapAffiliateButtonToProps } from '../../../../lib/mapToProps';
import AffiliateButton from './AffiliateButton';

const useStyles = makeStyles({
  card: {
    height: '100%',
    minWidth: '375px',
    maxWidth: '770px',
  },
});

const InfoItems = styled.ul`
  list-style-type: none;
`;

function ProductCard({ sections, image, name, topBtn }) {
  const classes = useStyles();

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <div>
      <Card classes={{ root: classes.card }}>
        <Grid item xs={12} sm container>
          <Grid item xs={6}>
            <Box p={3}>
              <GatsbyImage
                image={imageData}
                alt={image.alt}
                style={{
                  width: '50%',
                  height: 'auto',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box align="right" p={3}>
              <Button variant="contained">External</Button>
            </Box>
            {/* <Typography variant="h2" gutterBottom>
              This is the title text.
            </Typography> */}
            <h2>This is the title text.</h2>
            <p>This is the rating</p>
            <InfoItems>
              <li>
                <span>Label:</span> <span>Text</span>
              </li>
              <li>
                <span>Label:</span> <span>Text</span>
              </li>
              <li>
                <span>Label:</span> <span>Text</span>
              </li>
              <li>
                <span>Label:</span> <span>Text</span>
              </li>
            </InfoItems>
            <AffiliateButton />
          </Grid>
        </Grid>
        <Box p={3}>
          {sections.map((section) => {
            const { _type, _key } = section;
            switch (_type) {
              case 'productCardSection':
                return <ProductCardSection key={_key} />;
              case 'productCardDivider':
                return <ProductCardDivider key={_key} />;
              default:
                return <div key="default-inner-block"> Block still under development</div>;
            }
          })}
        </Box>
      </Card>
    </div>
  );
}

export default ProductCard;
