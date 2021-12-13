/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Icon,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  Paper,
  Popper,
  Link,
  ClickAwayListener,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { navigate } from 'gatsby';

const NavGroup = ({ title, url, group, location, position }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOnClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (nav) => {
    navigate(`/${nav.slug.current}`);
  };

  const open = Boolean(anchorEl);
  const id = open ? title.replace(' ', '-') : undefined;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Link
          component="button"
          color="primary"
          onClick={(e) => handleOnClick(e)}
          aria-describedby={id}
          type="button"
        >
          <Box fontSize="h4.fontSize">
            {title}
            {open ? <ExpandLess /> : <ExpandMore />}
          </Box>
        </Link>
        <Popper id={id} open={open} anchorEl={anchorEl} placement={position}>
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
      </div>
    </ClickAwayListener>
  );
};

export default NavGroup;
