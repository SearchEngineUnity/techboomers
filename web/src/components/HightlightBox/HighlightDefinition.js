import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
// import ArticleContent from '../block-contents/';

function HighlightDefinition({ blockContent, id }) {
  return (
    <Paper key={id}>
      <Typography component="p" variant="h3">
        <MenuBookIcon /> Definition
      </Typography>
      <Typography component="p" variant="body1">
        This is a definition.
      </Typography>
    </Paper>
  );
}

export default HighlightDefinition;
