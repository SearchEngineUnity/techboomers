import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Card } from '@material-ui/core';
import { CardActionArea } from 'gatsby-theme-material-ui';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../sanityConfig';

function TileImage({ image, alt }) {
  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Card>
      <CardActionArea>
        <GatsbyImage
          image={imageData}
          alt={alt}
          // style={{borderRadius: '50%'}}
          // style={{ height: '50px', width: 'auto' }}
          // style={{ aspectRatio: '2 / 1' }}
          // objectFit="cover"
        />
      </CardActionArea>
    </Card>
  );
}

export default TileImage;
