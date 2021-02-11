import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
// import ArticleContent from '../block-contents/';

function HighlightImportant({ blockContent, id }) {
  return (
    <Paper key={id}>
      <Typography component="p" variant="h3">
        <ErrorIcon /> Definition
      </Typography>
      <Typography component="p" variant="body1">
        This is a definition.
      </Typography>
    </Paper>
  );
}

export default HighlightImportant;
