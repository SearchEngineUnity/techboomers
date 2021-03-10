import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles((theme) => ({
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
    <Paper elevation={0} square>
      <Typography variant="body1">Table of Content</Typography>
      <Typography className={style.list}>{toc.map((link) => componentTypeSwitch(link))}</Typography>
    </Paper>
  );
}

export default Toc;
