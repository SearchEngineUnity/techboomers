import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import TextContent from '../TextSerializer';

function HighlightWarning({ blockContent, id }) {
  return (
    <Paper key={id}>
      <Typography component="p" variant="h3">
        <WarningIcon /> Definition
      </Typography>
      <TextContent blocks={blockContent} />
    </Paper>
  );
}

export default HighlightWarning;
