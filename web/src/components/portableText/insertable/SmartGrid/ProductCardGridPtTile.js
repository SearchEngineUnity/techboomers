import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Content from '../../serializer/ProductCardGridTileSerializer';

function ProductCardGridPtTile({ title, headingLevel, content }) {
  return (
    <Box margin={3}>
      <Typography component={headingLevel} variant="h5" gutterBottom>
        {title}
      </Typography>
      <Content blocks={content} />
    </Box>
  );
}

export default ProductCardGridPtTile;
