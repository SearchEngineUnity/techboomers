import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, MenuList, MenuItem, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavGroup({ url, title, icon }) {
  const classes = useStyles();
  return (
    <MenuList>
      <MenuItem>
        <Link to="http://www.google.com">
          <Icon>tapas</Icon>
          <Typography display="inline" variant="h4">
            Nav Menu Item
          </Typography>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="http://www.google.com">
          <Icon className={classes.icon}>tapas</Icon>
          <Typography display="inline" variant="h4">
            Nav Menu Item
          </Typography>
        </Link>
      </MenuItem>

      <MenuItem>
        <Link to="http://www.google.com">
          <Icon>tapas</Icon>
          <Typography display="inline" variant="h4">
            Nav Menu Item
          </Typography>
        </Link>
      </MenuItem>
    </MenuList>

    //     <Menu
    //   id="simple-menu"
    //   anchorEl={anchorEl}
    //   keepMounted
    //   open={Boolean(anchorEl)}
    //   onClose={handleClose}
    // >
    //   <MenuItem onClick={handleClose}>Profile</MenuItem>
    //   <MenuItem onClick={handleClose}>My account</MenuItem>
    //   <MenuItem onClick={handleClose}>Logout</MenuItem>
    // </Menu>

    //         <navGroup>
    //             <navItem>
    //             <i>icon is optional</>item in drop down style
    //             </navItem>
    //         </navGroup>
  );
}

export default NavGroup;
