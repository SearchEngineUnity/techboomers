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
          <Typography>
            Check out my{' '}
            <Link to="/blog" color="primary">
              blog
            </Link>
          </Typography>
        </Box>
        <StyledDiv>this should be red</StyledDiv>
      </Paper>
    </Container>
  );
};
export default Page;
