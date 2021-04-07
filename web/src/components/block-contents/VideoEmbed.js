import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: '56.25%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

function VideoEmbed({ url }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <StyledReactPlayer url={url} controls width="100%" height="100%" />
    </Box>
  );
}

export default VideoEmbed;
