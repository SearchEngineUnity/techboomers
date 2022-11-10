import * as React from 'react';
import { Container, Grid, Box, Hidden } from '@material-ui/core';

// markup
const RowReverse = () => (
  <Container>
    <Box my={3}>
      <Container maxWidth="lg">
        <Grid container spacing={3} direction="row-reverse">
          <Hidden smDown>
            <Grid item md={3}>
              <Box p={5} fontSize="42px" color="red" border="solid 5px red">
                1
              </Box>
            </Grid>
          </Hidden>
          <Grid item md={9} xs={12} component="article">
            <Box p={5} fontSize="42px" color="blue" border="solid 5px blue">
              2
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Container>
);

export default RowReverse;
