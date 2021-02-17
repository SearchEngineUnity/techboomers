import React from 'react';
import { Container, Typography, Paper, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { Link } from "gatsby"
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles((theme) => {
  console.log(theme);

  return {
    paper: {
      padding: theme.spacing(0.5),
      margin: theme.spacing(4),
      backgroundColor: theme.palette.tertiary.main,
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
      </Paper>
    </Container>
  );
};
export default Page;
