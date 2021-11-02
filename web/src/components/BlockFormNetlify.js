import React from 'react';
import { Box } from '@material-ui/core';
import FormNetlify from './FormNetlify';

function BlockFormNetlify({ title, align, form, style }) {
  return (
    <Box p={6}>
      <FormNetlify title={title} align={align} style={style} {...form} />
    </Box>
  );
}
export default BlockFormNetlify;
