import React from 'react';
import { Box } from '@material-ui/core';
import FormNetlify from './FormNetlify';

function BlockFormNetlify({ title, align, form }) {
  return (
    <>
      <Box textAlign={align} fontSize="body1.fontSize">
        <p>{title}</p>
      </Box>

      <FormNetlify {...form} />
    </>
  );
}
export default BlockFormNetlify;
