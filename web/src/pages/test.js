import React from 'react';
import { Container, Typography, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from "gatsby"
import { Link } from 'gatsby-theme-material-ui';
import styled from 'styled-components';

const StyledDiv = styled.div``;

const useStyles = makeStyles((theme) => {
  console.log(theme);

  return {
    paper: {
      padding: theme.spacing(0.5),
      margin: theme.spacing(4),
      backgroundColor: theme.palette.primary.main,
    },
  };
});

const Page = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper} elevation={5}>
        <Box p={0.5}>
          <Typography variant="h1">
            Check out my{' '}
            <Link to="/blog" color="secondary">
              blog
            </Link>
          </Typography>
          <Typography variant="h2">variant h2</Typography>
          <Typography variant="h3">variant h3</Typography>
          <Typography variant="h4">variant h4</Typography>
          <Typography variant="h5">variant h5</Typography>
          <Typography variant="h6">variant h6</Typography>
          <Typography variant="body1">variant body1. is a p tag</Typography>
          <Typography variant="body2">variant body2. is a p tag</Typography>
          <Typography variant="subtitle1">variant subtitle1. is a h6</Typography>
          <Typography variant="subtitle2">variant subtitle2. is a h6</Typography>
          <Typography variant="button">variant button. is a a span</Typography>
          <br />
          <Typography variant="caption">variant caption. is a span</Typography>
          <br />
          <Typography variant="overline">variant overline. is a span</Typography>
        </Box>
        <StyledDiv>this should be red</StyledDiv>
      </Paper>
    </Container>
  );
};

export default Page;
