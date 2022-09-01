import React from 'react';
import { Box, Card, CardActionArea } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../sanityConfig';
import CaptionContent from '../serializer/CaptionSerializer';

function ClickableImage({ image, link, borderRadius }) {
  const imageFluid = image?.asset;
  const fixedProps = getGatsbyImageData(imageFluid, { layout: 'fixed' }, sanityConfig);

  return (
    <Card>
      <CardActionArea>
        <GatsbyImage
          image={fixedProps}
          // eslint-disable-next-line no-unneeded-ternary
          alt={image.alt ? image.alt : ''}
          style={{
            display: 'block',
          }}
        />
      </CardActionArea>
    </Card>
  );
}

export default ClickableImage;
