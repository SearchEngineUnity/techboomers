import React from 'react';
import { Box } from '@material-ui/core';
import FormNetlify from './FormNetlify';

function BlockFormNetlify({ title, align, form, variant }) {
  return (
    <Box p={6}>
      <p>My variant: {variant}</p>
      <FormNetlify title={title} align={align} variant={variant} {...form} />
    </Box>
  );
}
export default BlockFormNetlify;
