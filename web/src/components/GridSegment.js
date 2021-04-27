import React, { useState } from 'react';
import { Grid, Box, Typography, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Card1 from './Card1';
// import { mapCardToProps } from '../lib/mapToProps';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function GridSegment({ idTag, title, subtitle, cards }) {
  const classes = useStyles();
  const pageSize = 2;
  const pageCount = Math.ceil(cards.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box as="section" id={idTag} pt={3} pb={3}>
      <Container maxWidth="lg">
        {title && <Typography variant="h2">{title}</Typography>}
        {subtitle && (
          <Typography component="p" variant="body1">
            {subtitle}
          </Typography>
        )}
        <Grid container spacing={3}>
          {cards.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((card) => (
            <>
              <Grid item key={card._key} xs={12} md={6} lg={4}>
                <Card1 {...card} />
              </Grid>
            </>
          ))}
        </Grid>
        <Box className={classes.root} mt={3}>
          <Pagination
            count={pageCount}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Box>
      </Container>
    </Box>
  );
}

export default GridSegment;
