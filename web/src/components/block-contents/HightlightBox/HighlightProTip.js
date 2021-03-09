import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TextContent from '../TextSerializer';

function HighlightProTip({ blockContent, id }) {
  return (
    <Paper key={id} color>
      <Typography component="p" variant="h3">
        <ThumbUpIcon /> Definition
      </Typography>
      <TextContent blocks={blockContent} />
    </Paper>
  );
}

export default HighlightProTip;
