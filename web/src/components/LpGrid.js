import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Card1 from './Card1';
// import { mapCardToProps } from '../lib/mapToProps';

function LpGrid({ id, title, subtitle, cards }) {
  return (
    <Paper as="section" id={id} className="guide-section">
      <Typography component="p" variant="h2">
        {title}
      </Typography>
      <Typography component="p" variant="body1">
        {subtitle}
      </Typography>
      <Grid container>
        {cards.map((card) => (
          <div key={card._id}>
            <Card1 />
          </div>
        ))}
      </Grid>
    </Paper>
  );
}

export default LpGrid;
