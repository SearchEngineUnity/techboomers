import React from 'react';
import { Link, Button } from 'gatsby-theme-material-ui';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function NavItem({ url, title, isButton, location }) {
  console.log(location);
  return (
    <>
      {isButton ? (
        <Button variant="contained" color="primary" to={url}>
          <Typography component="div" variant="h4">
            {title}
          </Typography>
        </Button>
      ) : (
        <Box
          fontSize="h4.fontSize"
          fontWeight={`/${url}` === location.pathname ? 'fontWeightBold' : 'fontWeightRegular'}
        >
          <Link to={url}>{title}</Link>
        </Box>
      )}
    </>
  );
}

export default NavItem;
