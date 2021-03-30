import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TextContent from '../TextSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.important.bgColor,
    borderColor: theme.palette.hlBox.important.borderColor,
  },
  icon: {
    color: theme.palette.hlBox.important.iconColor,
  },
  text: {
    color: theme.palette.hlBox.important.textColor,
  },
}));

function HighlightImportant({ blockContent, id }) {
  const classes = useStyles();
  return (
    <Paper variant="outlined" key={id} className={classes.root}>
      <Typography component="p" variant="h4" className={classes.text}>
        <MenuBookIcon className={classes.icon} /> Important
      </Typography>
      <TextContent blocks={blockContent} />
    </Paper>
  );
}

export default HighlightImportant;
