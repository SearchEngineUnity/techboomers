import React from 'react';
import { Typography } from '@material-ui/core';
import Content from '../../serializer/ProductCardGridTileSerializer';

function ProductCardGridPtTile({ title, headingLevel, content }) {
  return (
    <>
      <Typography component={headingLevel} variant="h5" gutterBottom>
        {title}
      </Typography>
      <Content blocks={content} />
    </>
  );
}

export default ProductCardGridPtTile;
