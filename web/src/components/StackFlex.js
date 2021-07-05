import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import ImgBlock from './FluidImgBlock';
import VideoBlock from './VideoBlock';
import SectionBlock from './SectionBlock';
import { mapFluidImgBlockToProps, mapSectionBlockToProps } from '../lib/mapToProps';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
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

function StructuredLrFlex({
  idTag,
  heading,
  subtitle,
  blocks,
  footer,
  blockWidth,
  headerAlignment,
  footerAlignment,
  colorSettings,
}) {
  const classes = useStyles();
  const colCalculator = (value) => {
    switch (value) {
      case 12:
        return {
          xs: 12,
        };
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

  const backgroundColor = determinColor(colorSettings?.background?.color) || 'transparent';
  const foregroundColor = determinColor(colorSettings?.foreground?.color) || 'text.primary';
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
        <StructuredSectionHeader
          heading={heading}
          subtitle={subtitle}
          headingColor={headingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        {blocks.map((block) => {
          const { _type, _key } = block;
          const col = colCalculator(parseInt(blockWidth, 10));
          const blockSelector = (key) => {
            switch (key) {
              case 'videoBlock':
                return <VideoBlock url={block.url} ratio={block.ratio} />;
              case 'imageBlock':
                return <ImgBlock {...mapFluidImgBlockToProps(block)} />;
              case 'sectionBlock':
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
            <Grid container justify="center" spacing={8} className={classes.mobileGrid} key={_key}>
              <Grid item {...col}>
                {blockSelector(_type)}
              </Grid>
            </Grid>
          );
        })}
        <StructuredSectionFooter
          footer={footer}
          footerColor={footerColor}
          align={footerAlignment}
        />
      </Container>
    </StyledBox>
  );
}

export default StructuredLrFlex;
