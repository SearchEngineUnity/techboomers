import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { WarningOutlined } from '@material-ui/icons';
import TextContent from '../../serializer/HighlightBoxSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.warning.bgColor,
    borderColor: theme.palette.hlBox.warning.borderColor,
    '& .pt-link': {
      color: theme.palette.hlBox.warning.linkColor,
    },
  },
  icon: {
    color: theme.palette.hlBox.warning.iconColor,
  },
  text: {
    color: theme.palette.hlBox.warning.textColor,
  },
  link: {
    color: theme.palette.hlBox.definition.linkColor,
  },
}));

function HighlightWarning({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Box component={Paper} variant="outlined" key={id} className={classes.root} my={2} p={2}>
      <Typography component="p" variant="h4" className={classes.text}>
        <WarningOutlined className={classes.icon} /> Warning
      </Typography>
      <div className={classes.text}>
        <TextContent blocks={blockContent} />
      </div>
    </Box>
  );
}

export default HighlightWarning;
