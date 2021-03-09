import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  subtitle: {
    color: theme.palette.common.black,
  },
}));

function HeroSubtitle({ children }) {
  const style = useStyles();

  return (
    <Typography component="p" variant="body1" className={style.subtitle}>
      {children}
    </Typography>
  );
}

export default HeroSubtitle;
