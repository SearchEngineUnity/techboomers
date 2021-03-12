import React from 'react';
import { Grid, Box, Typography, Container } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Card1 from './Card1';
// import { mapCardToProps } from '../lib/mapToProps';

function GridSegment({ idTag, title, subtitle, cards }) {
  return (
    <Box as="section" id={idTag} py={3}>
      <Container maxWidth="lg">
        {title && <Typography variant="h2">{title}</Typography>}
        {subtitle && (
          <Typography component="p" variant="body1">
            {subtitle}
          </Typography>
        )}
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item key={card._key} xs={12} md={6} lg={4}>
              <Card1 {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default GridSegment;
