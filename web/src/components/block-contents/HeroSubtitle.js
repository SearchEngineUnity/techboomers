import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

function HeroSubtitle({ children }) {
  return (
    <Typography component="p" variant="body1">
      {children}
    </Typography>
  );
}

export default HeroSubtitle;
