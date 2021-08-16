import React from 'react';
import { CardActionArea } from '@material-ui/core';

function CardActionAreaJumpLink({ hashId, children }) {
  return <CardActionArea href={`#${hashId}`}>{children}</CardActionArea>;
}

export default CardActionAreaJumpLink;
