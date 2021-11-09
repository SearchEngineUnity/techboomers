import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CardActionArea } from 'gatsby-theme-material-ui';
import sanityConfig from '../../../sanityConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  card: {
    height: '100%',
  },
  details: {
    display: 'flex',
    flexWrap: 'warp',
    flexDirection: 'row',
  },
  content: {
    flex: '1',
  },
  cover: {
    minWidth: 400,
  },
  footer: {
    [theme.breakpoints.down('md')]: {
      marginTop: 16,
    },
  },
}));

function TileImageRecSqr({ image, alt, url, title, text, date }) {
  const classes = useStyles();
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  return (
    <Card elevation={8} classes={{ root: classes.card }} square>
      {/* the link probably cannot be spread in the same way as from regular tiles */}
      <CardActionArea to={`/${url}`}>
        <div className={classes.details}>
          <GatsbyImage image={imageData} alt={alt} className={classes.cover} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              {lastUpdatedDate.toLocaleDateString('en-US', options)}
            </Typography>
            <Typography variant="body2" component="p">
              {text}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
