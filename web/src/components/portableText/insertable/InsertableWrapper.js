import React from 'react';
import { Box } from '@material-ui/core';

const InsertableWrapper = ({ children }) => (
  <Box mx={5} my={2}>
    {children}
  </Box>
);

export default InsertableWrapper;
