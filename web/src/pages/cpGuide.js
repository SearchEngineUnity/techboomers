import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const StyledDiv = styled.div``;

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Container>
      <nav>
        <StyledDiv>This will be a nav bar</StyledDiv>
        <br />
      </nav>
      <Box className={classes.hero}>
        <Typography variant="h1">This is an H1</Typography>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Box>
      <StyledDiv>Progress Bar could go here</StyledDiv>
      <Grid container>
        <Grid item md={9}>
          <Box>
            <Typography variant="h2">This would be the start of a portable text section</Typography>
            <Typography variant="body1">
              This would be the text you would want have in this section
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Box>
          <Box>
            <Typography variant="h2">H2</Typography>
            <Typography variant="body1">
              This would be the text you would want have in this section
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Box>
          <Box>
            <Typography variant="h2">H2</Typography>
            <Typography variant="body1">
              This would be the text you would want have in this section
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Box>
        </Grid>
        <Grid item md={3}>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant="body1">This would be stoc</Typography>
            <Typography variant="body1">item 2</Typography>
            <Typography variant="body1">item 3</Typography>
            <Typography variant="body1">item 4</Typography>
            <br />
            <br />
          </Paper>
        </Grid>
        {/* <Grid item>
          <Box className={classes.hero}>
            <Typography variant="body1">
              This is a CTA banner of some sort would this break portable text or would it be an
              insertable?
            </Typography>
            <br />
            <br />
            <br />
            <br />
          </Box>
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="h2">H2</Typography>
            <Typography variant="body1">
              This would be the text you would want have in this section
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Box>
          <Box>
            <Typography variant="h2">H2</Typography>
            <Typography variant="body1">
              This would be the text you would want have in this section
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Box>
        </Grid> */}
      </Grid>
      <footer>
        <StyledDiv>This will be a footer</StyledDiv>
      </footer>
    </Container>
  );
};

export default Page;
