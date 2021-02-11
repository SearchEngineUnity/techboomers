import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import ArticleContent from '../block-contents/';

function HighlightProTip({ blockContent, id }) {
  return (
    <Paper key={id} color>
      <Typography component="p" variant="h3">
        <ThumbUpIcon /> Definition
      </Typography>
      <Typography component="p" variant="body1">
        This is a definition.
      </Typography>
    </Paper>
  );
}

export default HighlightProTip;
