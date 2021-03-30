import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    <Box id={idTag} component="section" bgcolor="primary.main" color="primary.contrastText" py={3}>
      <Container maxWidth="lg">
        <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
          {blocks.map((block, index) => {
            const { _type } = block;
            const col = colCalculator(colArr[index]);
            let InnerBlock;
            switch (_type) {
              case 'video':
                InnerBlock = <div>Video block under development</div>;
                break;
              case 'illustration':
                // return <ImgBlock {...mapFluidImgBlockToProps(image)} loading="eager" />;
                InnerBlock = <ImgBlock {...mapFluidImgBlockToProps(block)} loading="eager" />;
                break;
              case 'heroBlock':
                InnerBlock = <HeroBlock {...mapHeroBlockToProps(block)} />;
                break;
              default:
                InnerBlock = <div> LR block still under development</div>;
                break;
            }
            return (
              <Grid item {...col} key={block._key || 'default'}>
                {InnerBlock}
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default LrHeroSegment;
