import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@material-ui/core';
import styled from 'styled-components';

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

function YoutubeBlock({ url }) {
  return (
    <Box pt="56.25%" position="relative">
      <StyledReactPlayer url={url} controls width="100%" height="100%" />
    </Box>
  );
}

export default YoutubeBlock;
