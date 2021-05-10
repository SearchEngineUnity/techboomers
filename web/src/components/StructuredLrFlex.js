import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImgBlock from './FluidImgBlock';
import SectionBlock from './SectionBlock';
import { mapFluidImgBlockToProps, mapSectionBlockToProps } from '../lib/mapToProps';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';

const useStyles = makeStyles((theme) => ({
  blockOneReverse: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  blockTwoReverse: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
  mobileGrid: {
    [theme.breakpoints.down('sm')]: {
      margin: -8,
      width: `calc(100% + 16px)`,
      '& > .MuiGrid-item': {
        padding: 8,
      },
    },
  },
}));

function StructuredLrFlex({
  idTag,
  h2,
  subtitle,
  blocks,
  footer,
  layout,
  alignment,
  reverseOrder,
  colorOverrides,
}) {
  const classes = useStyles();
  console.log(reverseOrder);

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
    <Box
      id={idTag}
      component="section"
      py={8}
      textAlign={alignment}
      bgcolor={colorOverrides?.background?.hex || 'transparent'}
      color={colorOverrides?.foreground?.hex || 'text.primary'}
    >
      <Container maxWidth="lg">
        <StructuredSectionHeader h2={h2} subtitle={subtitle} colorOverrides={colorOverrides} />
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={8}
          className={classes.mobileGrid}
        >
          {blocks.map((block, index) => {
            const { _type, _key } = block;
            const col = colCalculator(colArr[index]);
            const blockSelector = (key) => {
              switch (key) {
                case 'video':
                  return <div key="video">Video block under development</div>;

                case 'illustration':
                  return (
                    <ImgBlock
                      {...mapFluidImgBlockToProps(block)}
                      loading="eager"
                      key={_key}
                      height={400}
                    />
                  );

                case 'sectionBlock':
                  return (
                    <SectionBlock
                      h2={!!h2}
                      colorOverrides={colorOverrides}
                      {...mapSectionBlockToProps(block)}
                    />
                  );

                default:
                  return <div key="default-inner-block"> LR block still under development</div>;
              }
            };
            return (
              <Grid
                item
                {...col}
                key={block._key}
                className={`${index === 0 && reverseOrder ? classes.blockOneReverse : null} ${
                  index === 1 && reverseOrder ? classes.blockTwoReverse : null
                }`}
              >
                {blockSelector(_type)}
              </Grid>
            );
          })}
        </Grid>
        <StructuredSectionFooter footer={footer} colorOverrides={colorOverrides} />
      </Container>
    </Box>
  );
}

export default StructuredLrFlex;
