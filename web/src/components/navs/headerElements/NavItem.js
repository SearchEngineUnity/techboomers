import React from 'react';
import { Link, Button } from 'gatsby-theme-material-ui';
import { Box, Typography } from '@material-ui/core';

function NavItem({ url, title, isButton, location }) {
  return (
    <>
      {isButton ? (
        <Button variant="contained" color="primary" to={url} role="menuitem">
          <Typography component="span" variant="h4">
            {title}
          </Typography>
        </Button>
      ) : (
        <Box
          fontSize="h4.fontSize"
          fontWeight={`/${url}` === location.pathname ? 'fontWeightBold' : 'fontWeightRegular'}
          role="none"
        >
          <Link to={`/${url}`} role="menuitem">
            {title}
          </Link>
        </Box>
      )}
    </>
  );
}

export default NavItem;
