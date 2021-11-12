import React, { useState } from 'react';
import { Icon, MenuItem, ListItemIcon, ListItemText, Box, Paper, Popper } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { navigate } from 'gatsby';

const NavGroup = ({ title, url, group, location, isOpen, position }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseOver = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleNavigate = (nav) => {
    navigate(`/${nav.slug.current}`);
  };

  return (
    <>
      <Box
        fontSize="h4.fontSize"
        fontWeight={`/${url}` === location.pathname ? 'fontWeightBold' : 'fontWeightRegular'}
        onMouseOver={(event) => handleMouseOver(event)}
        onFocus={(event) => handleMouseOver(event)}
      >
        <Link to={`/${url}`} aria-owns={title} aria-haspopup="true">
          {title}
        </Link>
      </Box>
      <Popper open={isOpen} anchorEl={anchorEl} placement={position}>
        <Paper>
          {group.map(({ icon, title: itemTitle, nav, _key }) => (
            <MenuItem
              onClick={() => handleNavigate(nav)}
              key={_key}
              selected={`/${nav.slug.current}` === location.pathname}
            >
              {icon && (
                <ListItemIcon>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
              )}
              <ListItemText primary={itemTitle} />
            </MenuItem>
          ))}
        </Paper>
      </Popper>
    </>
  );
};
export default NavGroup;
