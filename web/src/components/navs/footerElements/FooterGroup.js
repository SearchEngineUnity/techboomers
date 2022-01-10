import React from 'react';
import { List, ListItem, Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    color: '#FFFFFF',
  },
});

function FooterGroup({ title, url, group }) {
  const classes = useStyles();

  return (
    <Box my={2}>
      <Box fontSize={14} fontWeight="fontWeightBold">
        {title}
      </Box>
      <List>
        {group.map(({ title: itemTitle, nav, _key }) => (
          <ListItem key={_key}>
            <Link to={`/${nav.slug.current}`} className={classes.link}>
              {itemTitle}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
export default FooterGroup;
