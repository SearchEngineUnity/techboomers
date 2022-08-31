import React from 'react';
import { Box } from '@material-ui/core';
import ProductCardSegment from '../../serializer/ProductCardSerializer';

function ProductCardFlexSegment({ data }) {
  return (
    <Box margin={3}>
      <ProductCardSegment blocks={data} />
    </Box>
  );
}

export default ProductCardFlexSegment;
