import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductCardSection from './ProductCardSection';
import ProductCardDivider from './ProductCardDivider';

const useStyles = makeStyles((theme) => ({}));

function ProductCard({ sections }) {
  const classes = useStyles();

  return (
    <Box>
      {/* fixed product card  */}

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
  );
}

export default ProductCard;
