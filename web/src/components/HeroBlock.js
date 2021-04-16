import React from 'react';
import { Typography } from '@material-ui/core';
import Subtitle from './block-contents/HeroSubtitleSerializer';

function HeroBlock({ h1, subtitle }) {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        {h1}
      </Typography>
      <Subtitle blocks={subtitle} />
    </>
  );
}

export default HeroBlock;
