// This code sheet has been updated to accommodate heading styles in smart list. They will all need to be moved to the new 'Heading Ordered List'

/* eslint-disable react/no-array-index-key */
// will need to set keys properly for react instead of using eslint disable

import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ListContent from '../serializer/ListSerializer';

const useStyles = makeStyles({
  removeStyle: { listStyle: 'none', padding: '16px' },
  imageBullet: (props) => ({
    padding: '0 0 0 1.5em',
    background: `url('${props.image}') no-repeat`,
    backgroundPosition: 'top 0.25em left',
    backgroundSize: '1em',
  }),
});

function SmartUnorderedList({ listItems, listStyleImage }) {
  const image = listStyleImage?.asset?.url;

  const classes = useStyles({ image });

  return (
    <ul className={image && classes.removeStyle}>
      {listItems.map((li) => (
        <Typography
          variant="body1"
          component="li"
          key={li._key}
          className={image && classes.imageBullet}
        >
          <ListContent blocks={li.content} />
        </Typography>
      ))}
    </ul>
  );
}

export default SmartUnorderedList;
