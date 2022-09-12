import React from 'react';
import { Box } from '@material-ui/core';

const InsertableWrapper = ({ children }) => (
  <Box mx={{ xs: 0, sm: 5 }} my={3}>
    {children}
  </Box>
);

export default InsertableWrapper;
