import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
  },
  list: {
    '& > *': {
      display: 'block',
    },
  },
}));

function Toc({ toc }) {
  const style = useStyles();

  const componentTypeSwitch = (link) => (
    <Link to={`#${link.header.toLowerCase().trim().replace(/ /g, '-')}`} key={link._key}>
      {link.title}
    </Link>
  );

  return (
    <Box p={3} className={style.root}>
      <Typography component="p" variant="h6">
        Table of Content
      </Typography>
      <br />
      <Typography className={style.list} variant="body1">
        {toc.map((link) => componentTypeSwitch(link))}
      </Typography>
    </Box>
  );
}

export default Toc;
