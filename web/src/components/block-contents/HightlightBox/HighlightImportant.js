import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import TextContent from '../TextSerializer';

function HighlightImportant({ blockContent, id }) {
  return (
    <Paper key={id}>
      <Typography component="p" variant="h3">
        <ErrorIcon /> Definition
      </Typography>
      <TextContent blocks={blockContent} />
    </Paper>
  );
}

export default HighlightImportant;
