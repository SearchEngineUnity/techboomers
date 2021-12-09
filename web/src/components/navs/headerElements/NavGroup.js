/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Icon, MenuItem, ListItemIcon, ListItemText, Box, Paper, Popper } from '@material-ui/core';
import { Link, Button } from 'gatsby-theme-material-ui';
import { navigate } from 'gatsby';

const NavGroup = ({ title, url, group, location, isOpen, position }) => {
  // sub menu is open when the top level item is being hovered on - this value is assigned to the prop of 'isOpen'
  // sub menu should also open on click of the top menu item - the value is stored inside 'expanded'
  // we do not need click to open or close when hover works
  // we only need to click open / close when there is no hover
  // isOpen is always true or false regardless if we have hover?

  // two values controlling open
  // isOpen, expanded
  // open, open => open
  // noHover, open => open
  // noHover, close => close
  // close, open => close
  // open, close => open
  // close, close => close

  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [popperOpen, setPopperOpen] = useState(false);
  console.log(isOpen);

  const handleMouseOver = (event) => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleNavigate = (nav) => {
    navigate(`/${nav.slug.current}`);
  };

  useEffect(() => {
    if (isOpen === true) {
      setPopperOpen(true);
    }
    if (isOpen === false) {
      setPopperOpen(false);
    }
    if (isOpen === 'noHover' && expanded) {
      setPopperOpen(true);
    }
    if (isOpen === 'noHover' && !expanded) {
      setPopperOpen(false);
    }
  }, [isOpen, expanded]);

  return (
    <>
      <Box
        fontSize="h4.fontSize"
        fontWeight={`/${url}` === location.pathname ? 'fontWeightBold' : 'fontWeightRegular'}
        onMouseOver={(event) => handleMouseOver(event)}
        onFocus={(event) => handleMouseOver(event)}
      >
        {/* <button type="button" onClick={() => setExpanded(!expanded)}>
          button
        </button> */}
        <Link
          // to={`/${url}`}
          component="button"
          // disabled
          // to="#"
          onClick={() => setExpanded(!expanded)} // have is open effect expanded then the control will be inside here.
          aria-owns={title}
          aria-haspopup="true"
        >
          {title}
        </Link>
      </Box>
      <Popper open={popperOpen} anchorEl={anchorEl} placement={position}>
        <Paper>
          {group.map(({ icon, title: itemTitle, nav, _key }) => (
            <MenuItem
              // href="https://google.com"
              onClick={() => handleNavigate(nav)} // free to navigate (is expanded being controlled here or from the parent?)
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

// import React, { useState } from 'react';
// import { Icon, MenuItem, ListItemIcon, ListItemText, Box, Paper, Popper } from '@material-ui/core';
// import { Link } from 'gatsby-theme-material-ui';
// import { navigate } from 'gatsby';

// const NavGroup = ({ title, url, group, location, isOpen, position }) => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMouseOver = (event) => {
//     if (anchorEl !== event.currentTarget) {
//       setAnchorEl(event.currentTarget);
//     }
//   };

//   const handleNavigate = (nav) => {
//     navigate(`/${nav.slug.current}`);
//   };

//   return (
//     <>
//       <Box
//         fontSize="h4.fontSize"
//         fontWeight={`/${url}` === location.pathname ? 'fontWeightBold' : 'fontWeightRegular'}
//         onMouseOver={(event) => handleMouseOver(event)}
//         onFocus={(event) => handleMouseOver(event)}
//       >
//         <Link to={`/${url}`} aria-owns={title} aria-haspopup="true">
//           {title}
//         </Link>
//       </Box>
//       <Popper open={isOpen} anchorEl={anchorEl} placement={position}>
//         <Paper>
//           {group.map(({ icon, title: itemTitle, nav, _key }) => (
//             <MenuItem
//               onClick={() => handleNavigate(nav)}
//               key={_key}
//               selected={`/${nav.slug.current}` === location.pathname}
//             >
//               {icon && (
//                 <ListItemIcon>
//                   <Icon>{icon}</Icon>
//                 </ListItemIcon>
//               )}
//               <ListItemText primary={itemTitle} />
//             </MenuItem>
//           ))}
//         </Paper>
//       </Popper>
//     </>
//   );
// };
// export default NavGroup;
