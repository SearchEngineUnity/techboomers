import React from 'react';
import { CardActionArea } from 'gatsby-theme-material-ui';

function CardActionAreaInternalLocal({ reference, hashId, parameter, children, newTab }) {
  return (
    <CardActionArea
      target={newTab ? '_blank' : ''}
      rel={newTab ? 'noopener' : ''}
      to={`/${reference.slug.current}${hashId ? `#${hashId}` : ''}${
        parameter ? `?${parameter}` : ''
      }`}
    >
      {children}
    </CardActionArea>
  );
}

export default CardActionAreaInternalLocal;
