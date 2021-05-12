import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import ImgBlock from './FluidImgBlock';
// import PropTypes from 'prop-types';
import HeroBlock from './HeroBlock';
import { mapFluidImgBlockToProps, mapHeroBlockToProps } from '../lib/mapToProps';

function LrHeroSegment({ layout, blocks, idTag }) {
  const colArr = layout.split(':').map((el) => parseInt(el, 10));

  const colCalculator = (value) => {
    switch (value) {
      case 10:
        return {
          xs: 12,
          md: 10,
        };

      case 9:
        return {
          xs: 12,
          md: 9,
        };

      case 8:
        return {
          xs: 12,
          md: 8,
        };

      case 7:
        return {
          xs: 12,
          md: 7,
        };

      case 6:
        return {
          xs: 12,
          md: 6,
        };

      case 5:
        return {
          xs: 12,
          md: 5,
        };

      case 4:
        return {
          xs: 12,
          md: 4,
        };

      case 3:
        return {
          xs: 12,
          md: 3,
        };

      case 2:
        return {
          xs: 12,
          md: 2,
        };

      default:
        console.log('calculator missing');
        return null;
    }
  };

  return (
    <Box id={idTag} component="section" bgcolor="primary.main" color="primary.contrastText" py={8}>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
          {blocks.map((block, index) => {
            const { _type, _key } = block;
            const col = colCalculator(colArr[index]);
            const blockSelector = (key) => {
              switch (key) {
                case 'youtubeBlock':
                  return <div key="youtubeBlock">Video block under development</div>;

                case 'illustration':
                  // return <ImgBlock {...mapFluidImgBlockToProps(image)} loading="eager" />;
                  return (
                    <ImgBlock {...mapFluidImgBlockToProps(block)} loading="eager" key={_key} />
                  );

                case 'heroBlock':
                  return <HeroBlock {...mapHeroBlockToProps(block)} key={_key} />;

                default:
                  return <div key="default-inner-block"> LR block still under development</div>;
              }
            };
            return (
              <Grid item {...col} key={block._key || 'default'}>
                {blockSelector(_type)}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default LrHeroSegment;
