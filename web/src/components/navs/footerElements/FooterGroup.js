import React from 'react';
import { List, ListItem, Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

function FooterGroup({ title, group }) {
  return (
    <Box my={2}>
      <Box fontSize={14} fontWeight="fontWeightBold">
        {title}
      </Box>
      <List>
        {group.map(({ title: itemTitle, nav, _key }) => (
          <ListItem key={_key}>
            <Link to={`/${nav.slug.current}`} color="inherit">
              {itemTitle}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default FooterGroup;
