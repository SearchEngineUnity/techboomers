import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TextContent from '../block-contents/TextSerializer';

function HighlightDefinition({ blockContent, id }) {
  return (
    <Paper key={id}>
      <Typography component="p" variant="h3">
        <MenuBookIcon /> Definition
      </Typography>
      <TextContent blocks={blockContent} />
    </Paper>
  );
}

export default HighlightDefinition;
