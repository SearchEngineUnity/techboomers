import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImgBlock from '../blocks/FluidImgBlock';
import VideoBlock from '../blocks/VideoBlock';
import SectionBlock from '../blocks/HeroSectionBlock';
import ButtonExternal from '../buttons/ButtonExternal';
import ButtonInternalGlobal from '../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../buttons/ButtonInternalLocal';
import ButtonJumpLink from '../buttons/ButtonJumpLink';
import GridFlex from '../blocks/BlockGridFlex';
import BlockFormNetlify from '../blocks/BlockFormNetlify';
import TestimonialBlock from '../blocks/TestimonialBlock';
import {
  mapFluidImgBlockToProps,
  mapSectionBlockToProps,
  mapMuiBtnToProps,
  mapGridFlexToProps,
  mapBlockFormNetlifyToProps,
  mapTestimonialBlockToProps,
} from '../../lib/mapToProps';
import HeroSectionFooter from './HeroSectionFooter';
import HeroSectionHeader from './HeroSectionHeader';
import { determineColor } from '../../lib/helperFunctions';

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
    paddingTop: (props) => (props.bleed ? '64px' : '40px'),
    paddingBottom: (props) => (props.bleed ? '64px' : '40px'),
    backgroundColor: (props) => props.bleed && props.backgroundColor,
    backgroundImage: (props) => props.bleed && props.bgImage && `url(${props.bgImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: (props) => (props.repeat ? 'repeat' : 'no-repeat'),
    [theme.breakpoints.down('md')]: {
      paddingTop: (props) => (props.bleed ? '64px' : '0px'),
      paddingBottom: (props) => (props.bleed ? '64px' : '0px'),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: (props) => (props.bleed ? 16 : 0),
      paddingRight: (props) => (props.bleed ? 16 : 0),
      paddingTop: (props) => (props.bleed ? 16 : 0),
      paddingBottom: (props) => (props.bleed ? 16 : 0),
    },
    '& .pt-link': {
      color: (props) => props.linkColor,
    },
  },
  column: {
    paddingTop: (props) => !props.bleed && '24px',
    paddingBottom: (props) => !props.bleed && '24px',
    backgroundColor: (props) => !props.bleed && props.backgroundColor,
    backgroundImage: (props) => !props.bleed && props.bgImage && `url(${props.bgImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: (props) => (props.repeat ? 'repeat' : 'no-repeat'),
    [theme.breakpoints.down('md')]: {
      paddingTop: (props) => (!props.bleed ? '64px' : '0px'),
      paddingBottom: (props) => (!props.bleed ? '64px' : '0px'),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: (props) => (!props.bleed ? 16 : 0),
      paddingRight: (props) => (!props.bleed ? 16 : 0),
      paddingTop: (props) => (!props.bleed ? 16 : 0),
      paddingBottom: (props) => (!props.bleed ? 16 : 0),
    },
  },
}));

function LrFlexHero({
  idTag,
  heading,
  subheading,
  subtitle,
  blocks,
  footer,
  layout,
  blockAlignment,
  headerAlignment,
  footerAlignment,
  reverseOrder,
  designSettings,
}) {
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

  const bleed = designSettings ? !!designSettings?.bleed : true;
  const bgImage = designSettings?.bgImage?.asset?.url;
  const backgroundColor = determineColor(designSettings?.background?.color) || 'transparent';
  const foregroundColor = determineColor(designSettings?.foreground?.color) || 'text.primary';
  const linkColor = determineColor(designSettings?.link?.color) || 'initial';
  const headingColor = determineColor(designSettings?.heading?.color) || 'inherit';
  const subheadingColor = determineColor(designSettings?.subheading?.color) || 'inherit';
  const subtitleColor = determineColor(designSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(designSettings?.footer?.color) || 'inherit';

  const classes = useStyles({ linkColor, bleed, bgImage, backgroundColor });

  return (
    <Box id={idTag} component="section" color={foregroundColor} className={classes.section}>
      <Container maxWidth="lg" className={classes.column}>
        <HeroSectionHeader
          heading={heading}
          subheading={subheading}
          subtitle={subtitle}
          headingColor={headingColor}
          subheadingColor={subheadingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        <Grid
          container
          justifyContent="center"
          alignItems={blockAlignment}
          spacing={6}
          className={classes.mobileGrid}
        >
          {blocks.map((block, index) => {
            const { _type, _key } = block;
            const col = colCalculator(colArr[index]);
            const blockSelector = (key) => {
              switch (true) {
                case key === 'videoBlock':
                  return <VideoBlock key={_key} url={block.url} ratio={block.ratio} />;
                case key === 'imageBlock':
                  return (
                    <ImgBlock {...mapFluidImgBlockToProps(block)} key={_key} loading="eager" />
                  );
                case key === 'heroBlock':
                  return (
                    <SectionBlock
                      hasSectionHeading={!!heading}
                      hasSectionSubheading={!!subheading}
                      hasSectionFooter={!!footer}
                      hasSectionSubtitle={!!subtitle}
                      headingColor={headingColor}
                      subheadingColor={subheadingColor}
                      subtitleColor={subtitleColor}
                      footerColor={footerColor}
                      {...mapSectionBlockToProps(block)}
                    />
                  );
                case key === 'gridFlex':
                  return (
                    <GridFlex
                      key={block._key}
                      hasSectionHeading={!!heading}
                      hasSectionSubheading={!!subheading}
                      hasSectionFooter={!!footer}
                      hasSectionSubtitle={!!subtitle}
                      headingColor={headingColor}
                      subheadingColor={subheadingColor}
                      subtitleColor={subtitleColor}
                      footerColor={footerColor}
                      {...mapGridFlexToProps(block)}
                    />
                  );
                case key === 'blockFormNetlify':
                  return (
                    <BlockFormNetlify key={block._key} {...mapBlockFormNetlifyToProps(block)} />
                  );
                case key === 'btnBlockMui' && block.link[0]._type === 'jumpLink':
                  return <ButtonJumpLink key={_key} {...mapMuiBtnToProps(block)} />;
                case key === 'btnBlockMui' && block.link[0]._type === 'externalLink':
                  return <ButtonExternal key={_key} {...mapMuiBtnToProps(block)} />;
                case key === 'btnBlockMui' && block.link[0]._type === 'internalGlobal':
                  return <ButtonInternalGlobal key={_key} {...mapMuiBtnToProps(block)} />;
                case key === 'btnBlockMui' && block.link[0]._type === 'internalLocal':
                  return <ButtonInternalLocal key={_key} {...mapMuiBtnToProps(block)} />;
                case key === 'testimonialBlock':
                  return (
                    <TestimonialBlock
                      key={_key}
                      hasSectionHeading={!!heading}
                      hasSectionSubheading={!!subheading}
                      hasSectionFooter={!!footer}
                      hasSectionSubtitle={!!subtitle}
                      headingColor={headingColor}
                      subheadingColor={subheadingColor}
                      subtitleColor={subtitleColor}
                      footerColor={footerColor}
                      {...mapTestimonialBlockToProps(block)}
                    />
                  );
                default:
                  return <div key="default-inner-block"> Block still under development</div>;
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
    </Box>
  );
}

export default LrFlexHero;
