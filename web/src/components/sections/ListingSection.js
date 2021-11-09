import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StructuredSectionFooter from '../StructuredSectionFooter';
import StructuredSectionHeader from '../StructuredSectionHeader';
import { determinColor } from '../../lib/helperFunctions';
import Tile1 from '../listingTile/TileSpgImageTop';
import Tile2 from '../listingTile/TileSpgImageBottom';
import Tile3 from '../listingTile/TileSpgImageLeft';
import Tile4 from '../listingTile/TileSpgImageRight';
import Tile5 from '../listingTile/TileSpgImageRightThreeCol';
import Pagination from '../ListingPagination';

const useStyles = makeStyles((theme) => ({
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
    '& .pt-link': {
      color: (props) => props.linkColor,
    },
  },
}));

function ListingSection({
  idTag,
  heading,
  subtitle,
  footer,
  layout,
  headerAlignment,
  footerAlignment,
  colorSettings,
  currentpage,
  numPages,
  slug,
  listingItems,
  tileOption,
}) {
  // number of tiles desktop/table/moble: '6/4/2' -> {lg: 2, md: 3, xs: 6}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = { lg: 12 / valueArrNum[0], md: 12 / valueArrNum[1], xs: 12 / valueArrNum[2] };
    return colObj;
  };

  const col = colCalculate(layout);
  const backgroundColor = determinColor(colorSettings?.background?.color) || 'transparent';
  const foregroundColor = determinColor(colorSettings?.foreground?.color) || 'text.primary';
  const linkColor = determinColor(colorSettings?.link?.color) || 'initial';
  const headingColor = determinColor(colorSettings?.heading?.color) || 'inherit';
  const subtitleColor = determinColor(colorSettings?.subtitle?.color) || 'inherit';
  const footerColor = determinColor(colorSettings?.footer?.color) || 'inherit';
  const paginationColor = colorSettings?.foreground?.color;
  const classes = useStyles({ linkColor, foregroundColor });

  return (
    <Box
      id={idTag}
      component="section"
      py={8}
      bgcolor={backgroundColor}
      color={foregroundColor}
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
        <Grid container spacing={3}>
          {listingItems.map((item) => {
            const tileSelector = (key) => {
              switch (key) {
                case '1':
                  return <Tile1 {...item} />;
                case '2':
                  return <Tile2 {...item} />;
                case '3':
                  return <Tile3 {...item} />;
                case '4':
                  return <Tile4 {...item} />;
                case '5':
                  return <Tile5 {...item} />;
                default:
                  return <div>Tile still under development</div>;
              }
            };
            return (
              <Grid item key={item._key} {...col}>
                {tileSelector(tileOption)}
              </Grid>
            );
          })}
        </Grid>
        {numPages > 1 && (
          <Pagination
            currentpage={currentpage}
            numPages={numPages}
            slug={slug}
            color={paginationColor}
          />
        )}
        <StructuredSectionFooter
          footer={footer}
          footerColor={footerColor}
          align={footerAlignment}
        />
      </Container>
    </Box>
  );
}

export default ListingSection;
