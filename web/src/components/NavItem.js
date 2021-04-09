import React from 'react';
import { Link, Button } from 'gatsby-theme-material-ui';
import Typography from '@material-ui/core/Typography';

function NavItem({ url, title, isButton }) {
  return (
    <>
      {isButton ? (
        <Button variant="contained" color="primary" to={url}>
          {title}
        </Button>
      ) : (
        <Typography variant="h4">
          <Link to={url}>{title}</Link>
        </Typography>
      )}
    </>
  );
}

export default NavItem;
