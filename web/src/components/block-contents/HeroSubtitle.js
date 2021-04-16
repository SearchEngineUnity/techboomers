import React from 'react';
import { Typography } from '@material-ui/core';

function HeroSubtitle({ children }) {
  return (
    <>
      {children ? (
        <Typography component="p" variant="subtitle1">
          {children}
        </Typography>
      ) : null}
    </>
  );
}

export default HeroSubtitle;
