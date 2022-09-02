import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardActionArea } from '@material-ui/core';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import sanityConfig from '../../../../sanityConfig';

const useStyles = makeStyles({
  card: {
    borderRadius: (props) => props.borderRadius,
    height: (props) => `${props.height}px`,
    width: (props) => `${props.width}px`,
  },
});

function ClickableImage({ image, alignment, href, borderRadius }) {
  const imageFluid = image?.asset;
  const fixedProps = getGatsbyImageData(imageFluid, { layout: 'fixed' }, sanityConfig);
  const height = image?.asset?.height;
  const width = image?.asset?.width;
  console.log(href);

  const classes = useStyles({ borderRadius, height, width });

  return (
    <Box display="flex" justifyContent={alignment}>
      <Card className={classes.card}>
        <CardActionArea target="_blank" rel="nofollow" href={href}>
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
    </Box>
  );
}

export default ClickableImage;
