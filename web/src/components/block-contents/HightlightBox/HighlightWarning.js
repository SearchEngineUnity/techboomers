import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TextContent from '../TextSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.warning.bgColor,
    borderColor: theme.palette.hlBox.warning.borderColor,
  },
  icon: {
    color: theme.palette.hlBox.warning.iconColor,
  },
  text: {
    color: theme.palette.hlBox.warning.textColor,
  },
}));

function HighlightWarning({ blockContent, id }) {
  const style = useStyles();
  return (
    <Paper variant="outlined" key={id} className={style.root}>
      <Typography component="p" variant="h4" className={style.text}>
        <MenuBookIcon className={style.icon} /> Warning
      </Typography>
      <TextContent blocks={blockContent} />
    </Paper>
  );
}

export default HighlightWarning;
