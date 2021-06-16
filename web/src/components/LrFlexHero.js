import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import ImgBlock from './FluidImgBlock';
import VideoBlock from './VideoBlock';
import SectionBlock from './HeroSectionBlock';
import { mapFluidImgBlockToProps, mapSectionBlockToProps } from '../lib/mapToProps';
import HeroSectionFooter from './HeroSectionFooter';
import HeroSectionHeader from './HeroSectionHeader';
import { determinColor } from '../lib/helperFunctions';

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
  section: {
    [theme.breakpoints.down('sm')]: {
      padding: 16,
    },
  },
}));

const StyledBox = styled(Box)`
  & a {
    color: ${({ linkColor }) => linkColor};
  }
`;

function LrFlexHero({
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
  colorSettings,
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

  const backgroundColor = determinColor(colorSettings?.background?.color) || 'primary.main';
  const foregroundColor = determinColor(colorSettings?.foreground?.color) || 'primary.contrastText';
  const linkColor = determinColor(colorSettings?.link?.color) || 'initial';
  const headingColor = determinColor(colorSettings?.heading?.color) || 'inherit';
  const subtitleColor = determinColor(colorSettings?.subtitle?.color) || 'inherit';
  const footerColor = determinColor(colorSettings?.footer?.color) || 'inherit';

  return (
    <StyledBox
      id={idTag}
      component="section"
      py={8}
      bgcolor={backgroundColor}
      color={foregroundColor}
      linkColor={linkColor}
      className={classes.section}
    >
      <Container maxWidth="lg">
        <HeroSectionHeader
          heading={heading}
          subtitle={subtitle}
          headingColor={headingColor}
          subtitleColor={subtitleColor}
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
            const col = colCalculator(colArr[index]);
            const blockSelector = (key) => {
              switch (key) {
                case 'videoBlock':
                  return <VideoBlock key={_key} url={block.url} ratio={block.ratio} />;
                case 'imageBlock':
                  return <ImgBlock {...mapFluidImgBlockToProps(block)} key={_key} />;
                case 'heroBlock':
                  return (
                    <SectionBlock
                      hasSectionHeading={!!heading}
                      hasSectionFooter={!!footer}
                      hasSectionSubtitle={!!subtitle}
                      headingColor={headingColor}
                      subtitleColor={subtitleColor}
                      footerColor={footerColor}
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
        <HeroSectionFooter footer={footer} footerColor={footerColor} align={footerAlignment} />
      </Container>
    </StyledBox>
  );
}

export default LrFlexHero;
