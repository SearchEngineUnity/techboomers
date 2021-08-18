import React from 'react';
import { CardActionArea } from 'gatsby-theme-material-ui';
// import { GatsbyImage } from 'gatsby-plugin-image';
import { Typography, Card, CardContent } from '@material-ui/core';
// import { mapFluidImgBlockToProps } from '../../lib/mapToProps';

function TileSpg({ title, image, url }) {
  return (
    <Card style={{ height: '100%' }}>
      <CardActionArea to={url} style={{ height: '100%' }}>
        {/* <GatsbyImage image={image} alt={image.alt} /> */}
        <CardContent>
          <Typography component="p" variant="h5">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default TileSpg;
