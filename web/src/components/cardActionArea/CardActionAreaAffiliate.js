import React from 'react';
import { CardActionArea } from '@material-ui/core';

function CardActionAreaAffiliate({ href, children }) {
  return (
    <CardActionArea target="_blank" rel="nofollow" href={href}>
      {children}
    </CardActionArea>
  );
}

export default CardActionAreaAffiliate;
