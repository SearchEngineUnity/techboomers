import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
// import ArticleContent from '../block-contents/';

function HighlightDidYouKnow({ blockContent, id }) {
  return (
    <Paper key={id}>
      <Typography component="p" variant="h3">
        <EmojiObjectsIcon /> Definition
      </Typography>
      <Typography component="p" variant="body1">
        This is a definition.
      </Typography>
    </Paper>
  );
}

export default HighlightDidYouKnow;
