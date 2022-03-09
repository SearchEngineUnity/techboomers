import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Box, Link } from '@material-ui/core';

function NavPhone({ text, data }) {
  return (
    <>
      <Box
        display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }}
        fontWeight="fontWeightBold"
        fontSize="h3.fontSize"
        role="none"
      >
        <Link
          href={`tel:${data.sanityContactInfo.phone}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
        >
          {text} {data.sanityContactInfo.phone}
        </Link>
      </Box>
      <Box
        display={{ xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }}
        fontWeight="fontWeightBold"
        fontSize="h4.fontSize"
        role="none"
      >
        <Link
          href={`tel:${data.sanityContactInfo.phone}`}
          content="telephone=yes"
          color="inherit"
          underline="none"
          role="menuitem"
        >
          {data.sanityContactInfo.phone}
        </Link>
      </Box>
    </>
  );
}

export default function MyNavPhone(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityContactInfo {
            phone
          }
        }
      `}
      render={(data) => <NavPhone data={data} {...props} />}
    />
  );
}
