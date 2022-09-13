import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function ProductInfoList({ infoList }) {
  return (
    <>
      {infoList.map((item) => (
        <Grid container spacing={1} key={item._key}>
          <Grid item xs={6} sm={5}>
            <Typography variant="body1">{item.label}:</Typography>
          </Grid>
          <Grid item xs={6} sm={7}>
            <Typography variant="body1">{item.text}</Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default ProductInfoList;
