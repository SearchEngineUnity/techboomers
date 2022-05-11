import React from 'react';
import { Box, Link } from '@material-ui/core';

function NavPhone({ text, number }) {
  return (
    <>
      <Box
        display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
        fontWeight="fontWeightBold"
        fontSize="h3.fontSize"
        role="none"
      >
        <Link
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
        >
          {text}
        </Link>
      </Box>
      <Box
        display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}
        fontWeight="fontWeightBold"
        fontSize="h4.fontSize"
        role="none"
      >
        <Link
          href={`tel:${number}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
        >
          {number}
        </Link>
      </Box>
    </>
  );
}

export default NavPhone;
