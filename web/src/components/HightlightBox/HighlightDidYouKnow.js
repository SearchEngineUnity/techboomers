import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import TextContent from '../block-contents/TextSerializer';

function HighlightDidYouKnow({ blockContent, id }) {
  return (
    <Paper key={id}>
      <Typography component="p" variant="h3">
        <EmojiObjectsIcon /> Definition
      </Typography>
      <TextContent blocks={blockContent} />
    </Paper>
  );
}

export default HighlightDidYouKnow;
