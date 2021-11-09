import React from 'react';
import { Typography, Card, CardContent, Grid } from '@material-ui/core';
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
    // <Card elevation={8} classes={{ root: classes.card }} square>
    //   {/* the link probably cannot be spread in the same way as from regular tiles */}
    //   <CardActionArea to={`/${url}`}>
    //     <div className={classes.details}>
    //       <GatsbyImage image={imageData} alt={alt} className={classes.cover} />
    //       <CardContent className={classes.content}>
    //         <Typography gutterBottom variant="h2">
    //           {title}
    //         </Typography>
    //         <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
    //           {lastUpdatedDate.toLocaleDateString('en-US', options)}
    //         </Typography>
    //         <Typography variant="body2" component="p">
    //           {text}
    //         </Typography>
    //       </CardContent>
    //     </div>
    //   </CardActionArea>
    // </Card>
    <Card elevation={8} classes={{ root: classes.card }} square>
      {/* the link probably cannot be spread in the same way as from regular tiles */}
      <CardActionArea to={`/${url}`}>
        <Grid container spacing={3}>
          <Grid item md={4} sm={3} xs={12}>
            <GatsbyImage
              image={imageData}
              alt={alt}
              style={{
                width: '100%',
                height: '100%',
              }}
              imgStyle={{
                objectFit: 'cover',
              }}
            />
          </Grid>
          <Grid item md={8} sm={9} xs={12}>
            <CardContent>
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
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}

export default TileImageRecSqr;
