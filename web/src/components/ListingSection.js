import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import StructuredSectionFooter from './StructuredSectionFooter';
import StructuredSectionHeader from './StructuredSectionHeader';
import { determinColor } from '../lib/helperFunctions';
import TileImageTitle1 from './TileImageTitle1';

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
  },
}));

const StyledBox = styled(Box)`
  & a {
    color: ${({ linkColor }) => linkColor};
  }
`;

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
  limit,
  listType,
  numPages,
  skip,
  slug,
  listingItems,
}) {
  const classes = useStyles();

  // number of tiles desktop/table/moble: '6/4/2' -> {lg: 2, md: 3, xs: 6}
  const colCalculator = (value) => {
    switch (value) {
      case '6/4/2':
        return {
          xs: 6,
          md: 3,
          lg: 2,
        };
      case '4/2/1':
        return {
          xs: 12,
          md: 6,
          lg: 3,
        };
      case '3/2/1':
        return {
          xs: 12,
          md: 6,
          lg: 4,
        };
      case '2/2/1':
        return {
          xs: 12,
          md: 6,
          lg: 6,
        };
      default:
        console.log('calculator missing');
        return null;
    }
  };

  const col = colCalculator(layout);

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
        <Grid container spacing={3}>
          {listingItems.map((item) => (
            <Grid item key={item._key} {...col}>
              <TileImageTitle1 {...item} />
            </Grid>
          ))}
        </Grid>
        <Box mt={3}>
          <Pagination
            page={currentpage}
            count={numPages}
            variant="outlined"
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/${slug}${item.page === 1 ? '' : `/${item.page}`}`}
                {...item}
              />
            )}
          />
        </Box>
        <StructuredSectionFooter
          footer={footer}
          footerColor={footerColor}
          align={footerAlignment}
        />
      </Container>
    </StyledBox>
  );
}

export default ListingSection;
