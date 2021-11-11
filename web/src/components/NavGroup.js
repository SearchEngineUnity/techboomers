import React, { useState } from 'react';
import { Icon, Menu, MenuItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { navigate } from 'gatsby';

const NavGroup = ({ title, url, group, location, isOpen }) => {
  console.log(isOpen);
  // not ture or false what is event.currentTarget? How is this different the event.Target?
  const [anchorEl, setAnchorEl] = useState(null);
  const [prevIsOpen, setPrevIsOPen] = useState(null);
  const [open, setOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOPen(isOpen);
    setOpen(isOpen);
  }

  // const handleMouseOver = (event) => {
  //   console.log('handleMouseOver');
  //   console.log('a1', anchorEl);
  //   console.log('e', event.currentTarget);
  //   if (anchorEl !== event.currentTarget) {
  //     console.log('after if');
  //     console.log('a2', anchorEl);
  //     setAnchorEl(event.currentTarget);
  //     setOpen(true);
  //   }
  // };

  const handleClose = () => {
    console.log('handelClose');
    console.log('a3', anchorEl);
    setAnchorEl(null);
    setOpen(false);
  };

  const handleNavigate = (nav) => {
    console.log('handelNav');
    console.log('a4', anchorEl);
    // setAnchorEl(null);
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
          // onMouseOver={(event) => handleMouseOver(event)}
        >
          {title}
        </Link>
      </Box>
      <Menu
        id={title}
        // getContentAnchorEl={null}
        // anchorEl={anchorEl}
        // Why is anchorEl is Boolean here?
        // open={Boolean(anchorEl)}
        open={isOpen}
        // onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose, disablePadding: true }}
        disableEnforceFocus
        style={{ pointerEvents: 'none', marginTop: '8px' }}
        PaperProps={{ style: { pointerEvents: 'auto' }, square: true }}
        hideBackdrop
        keepMounted
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {group.map(({ icon, title: itemTitle, nav, _key }) => (
          <MenuItem
            onClick={() => handleNavigate(nav)}
            key={_key}
            selected={`/${url}` === location.pathname}
          >
            <ListItemIcon>
              <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={itemTitle} />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default NavGroup;
