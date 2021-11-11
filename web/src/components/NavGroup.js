import React, { useState } from 'react';
import { Icon, MenuItem, ListItemIcon, ListItemText, Box, Paper, Popper } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { navigate } from 'gatsby';

const NavGroup = ({ title, url, group, location, isOpen }) => {
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
      >
        <Link
          to={`/${url}`}
          aria-owns={anchorEl ? title : undefined}
          aria-haspopup="true"
          onMouseOver={(event) => handleMouseOver(event)}
        >
          {title}
        </Link>
      </Box>

      <Popper open={isOpen} anchorEl={anchorEl}>
        <Paper>
          {group.map(({ icon, title: itemTitle, nav, _key }) => (
            <MenuItem
              onClick={() => handleNavigate(nav)}
              key={_key}
              selected={`/${url}` === location.pathname}
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
