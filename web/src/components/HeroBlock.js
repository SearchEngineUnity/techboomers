import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import Subtitle from './block-contents/HeroSubtitleSerializer';

function HeroBlock({ h1, subtitle }) {
  return (
    <>
      <Typography variant="h1">{h1}</Typography>
      <Subtitle blocks={subtitle} />
    </>
  );
}

export default HeroBlock;
