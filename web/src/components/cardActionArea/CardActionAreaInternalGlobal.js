import React from 'react';
import { CardActionArea } from '@material-ui/core';

function CardActionAreaInternalGlobal({ href, children, newTab }) {
  return (
    <CardActionArea target={newTab ? '_blank' : ''} rel={newTab ? 'noopener' : ''} href={href}>
      {children}
    </CardActionArea>
  );
}

export default CardActionAreaInternalGlobal;
