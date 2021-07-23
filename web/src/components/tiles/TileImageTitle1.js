import React from 'react';
import { CardActionArea } from 'gatsby-theme-material-ui';
import { Typography, Card, CardContent } from '@material-ui/core';
import ImgBlock from './TileImage';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';

function TileImageTitle1({ title, image, url }) {
  return (
    <Card style={{ height: '100%' }}>
      <CardActionArea to={url} style={{ height: '100%' }}>
        <ImgBlock {...mapFluidImgBlockToProps(image)} />
        <CardContent>
          <Typography component="p" variant="h5">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default TileImageTitle1;
