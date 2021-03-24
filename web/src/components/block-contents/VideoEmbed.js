import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  margin-bottom: 0.5rem;
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

function VideoEmbed({ url }) {
  return (
    <PlayerWrapper>
      <StyledReactPlayer url={url} controls width="100%" height="100%" />
    </PlayerWrapper>
  );
}

export default VideoEmbed;
