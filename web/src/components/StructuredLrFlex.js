import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-theme-material-ui';
import styled from 'styled-components';
import ImgBlock from './FluidImgBlock';
import VideoBlock from './VideoBlock';
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

const StyledBox = styled(Box)`
  & a {
    color: ${({ colorOverrides }) =>
      colorOverrides?.link?.hex ? colorOverrides?.link?.hex : null};
  }
`;

function StructuredLrFlex({
  idTag,
  heading,
  subtitle,
  blocks,
  footer,
  layout,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  reverseOrder,
  colorOverrides,
}) {
  const classes = useStyles();

  const colArr = layout.split(':').map((el) => parseInt(el, 10));
  console.log(classes);

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
    <StyledBox
      id={idTag}
      component="section"
      py={8}
      bgcolor={colorOverrides?.background?.hex || 'transparent'}
      color={colorOverrides?.foreground?.hex || 'text.primary'}
      className={classes.section}
    >
      <Container maxWidth="lg">
        <StructuredSectionHeader
          heading={heading}
          subtitle={subtitle}
          colorOverrides={colorOverrides}
          align={headerAlignment}
        />
        <Grid
          container
          justify="center"
          alignItems={blockAlignment}
          spacing={8}
          className={classes.mobileGrid}
        >
          {blocks.map((block, index) => {
            const { _type, _key } = block;
            console.log(block);
            const col = colCalculator(colArr[index]);
            const blockSelector = (key) => {
              switch (key) {
                case 'videoBlock':
                  return <VideoBlock key={_key} url={block.url} ratio={block.ratio} />;

                case 'imageBlock':
                  return <ImgBlock {...mapFluidImgBlockToProps(block)} key={_key} />;

                case 'sectionBlock':
                  return (
                    <SectionBlock
                      hasSectionHeading={!!heading}
                      hasSectionFooter={!!footer}
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
        <StructuredSectionFooter
          footer={footer}
          colorOverrides={colorOverrides}
          align={footerAlignment}
        />
      </Container>
    </StyledBox>
  );
}

export default StructuredLrFlex;
