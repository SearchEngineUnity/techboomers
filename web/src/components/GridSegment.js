import React, { useState } from 'react';
import { Grid, Box, Typography, Container, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Card1 from './Card1';
// import { mapCardToProps } from '../lib/mapToProps';

function GridSegment({ idTag, title, subtitle, cards }) {
  const pageSize = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const cardsOnPage = 0;

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
          {cards.slice(currentPage * pageSize, (currentPage + 1) * pageSize).map((card) => (
            <>
              <Grid item key={card._key} xs={12} md={6} lg={4}>
                <Card1 {...card} />
              </Grid>
            </>
          ))}
        </Grid>
        <Button onClick={() => setCurrentPage(currentPage - 1)}>Back</Button>
        <Button onClick={() => setCurrentPage(currentPage + 1)}>Forward</Button>
      </Container>
    </Box>
  );
}

export default GridSegment;

// https://reactjs.org/docs/hooks-state.html
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// currentpage = 0
// pagesize = 10
// cards [ ]

// page 1
// start = 0 end = 10
// start = currentpage * pagesize end = (currentpage +1) * pagesize

// page 2
// start =10 end = 20
// start = currentpage * pagesize  end = (currentpage +1) * pagesize

// page 3
// start = 20 end = 30
// start = currentpage * pagesize  end = (currentpage +1) * pagesize
