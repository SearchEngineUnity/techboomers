import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
// import ArticleContent from '../block-contents/';

function HighlightWarning({ blockContent, id }) {
  return (
    <Paper key={id}>
      <Typography component="p" variant="h3">
        <WarningIcon /> Definition
      </Typography>
      <Typography component="p" variant="body1">
        This is a definition.
      </Typography>
    </Paper>
  );
}

export default HighlightWarning;
