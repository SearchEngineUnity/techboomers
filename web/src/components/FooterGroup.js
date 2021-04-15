import React, { useState } from 'react';
import { Icon, Menu, MenuItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { navigate } from 'gatsby';

function FooterGroup({ title, url, group, location }) {
  const [anchorEl, setAnchorEl] = useState(null);
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  function handleMouseOver(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }
  function handleClose() {
    setAnchorEl(null);
  }

  function handleNavigate(nav) {
    setAnchorEl(null);
    navigate(`/${nav.slug.current}`);
  }
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
          onClick={handleClick}
          onMouseOver={handleMouseOver}
        >
          {title}
        </Link>
      </Box>
      <Menu
        id={title}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
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
}
export default FooterGroup;
