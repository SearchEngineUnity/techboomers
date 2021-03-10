import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TextContent from '../TextSerializer';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.hlBox.proTip.bgColor,
    borderColor: theme.palette.hlBox.proTip.borderColor,
  },
  icon: {
    color: theme.palette.hlBox.proTip.iconColor,
  },
  text: {
    color: theme.palette.hlBox.proTip.textColor,
  },
}));

function HighlightProTip({ blockContent, id }) {
  const style = useStyles();
  return (
    <Paper variant="outlined" key={id} className={style.root}>
      <Typography component="p" variant="h4" className={style.text}>
        <MenuBookIcon className={style.icon} /> Pro Tip
      </Typography>
      <TextContent blocks={blockContent} />
    </Paper>
  );
}

export default HighlightProTip;
