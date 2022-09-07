/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Card, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import ProductCardFlexSegment from './ProductCardFlexSegment';
import ProductCardDividerSegment from './ProductCardDividerSegment';
import ProductInfoList from './ProductInfoList';
import ProductCardRating from './ProductCardRating';
import ButtonAffiliate from '../../../buttons/ButtonAffiliate';
import { mapMuiBtnToProps } from '../../../../lib/mapToProps';
import sanityConfig from '../../../../../sanityConfig';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    minWidth: '375px',
    maxWidth: '770px',
  },
  paper: {
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  enlarge: {
    border: 'none',
    background: 'none',
  },
}));

function ProductCard({
  name,
  headingLevel,
  rating,
  image,
  tagText,
  tagColor,
  infoList,
  topBtn,
  segments,
}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imageData = getGatsbyImageData(
    image,
    {
      layout: 'fullWidth',
    },
    sanityConfig,
  );

  console.log(topBtn);
  return (
    <Card>
      <Box margin={3}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={3} md={4}>
            <button type="button" onClick={handleOpen} className={classes.enlarge}>
              <GatsbyImage image={imageData} alt={image?.alt} />
              <br />
              <div alignItems="center" style={{ color: '#a9a9a9' }}>
                Click image to enlarge
              </div>
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <div className={classes.paper}>
                <GatsbyImage image={imageData} alt={image?.alt} />
              </div>
            </Modal>
          </Grid>
          <Grid item xs={12} sm={9} md={8}>
            <Grid container spacing={3} justifyContent="space-between" alignItems="center">
              <Grid item xs>
                <Typography component={headingLevel} variant="h4">
                  {name}
                </Typography>
                <ProductCardRating rating={rating} />
              </Grid>
              <Grid item>
                <ButtonAffiliate {...mapMuiBtnToProps(topBtn)} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <ProductInfoList infoList={infoList} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {segments.map((segment) => {
        const { _type, _key } = segment;
        switch (_type) {
          case 'productCardFlexSegment':
            return <ProductCardFlexSegment key={_key} {...segment} />;
          case 'productCardDividerSegment':
            return <ProductCardDividerSegment key={_key} />;
          default:
            return <div key="default-inner-block"> Block still under development</div>;
        }
      })}
    </Card>
  );
}

export default ProductCard;
