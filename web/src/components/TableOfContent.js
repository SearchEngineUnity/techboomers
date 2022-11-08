/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { useHeadsObserver } from '../hooks/useHeadObserver';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    position: 'sticky',
    top: 0,
  },
  activeLink: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
  list: {
    listStyleType: 'none',
    padding: '0px',
  },
}));

function TableOfContent({ toc }) {
  const classes = useStyles();
  const { activeId } = useHeadsObserver();

  console.log(activeId);

  return (
    <Box p={3} className={classes.root}>
      <Typography component="p" variant="h4" gutterBottom>
        Table of Contents
      </Typography>
      <nav>
        <ul className={classes.list}>
          {toc.map((item) => (
            <Box component="li" fontSize="body2.fontSize" key={item._key} mb={1}>
              <Link
                className={`${item.hashID === activeId ? classes.activeLink : null}`}
                underline="hover"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item.hashID}`).scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {item.title}
              </Link>
            </Box>
          ))}
        </ul>
      </nav>
    </Box>
  );
}

export default TableOfContent;
