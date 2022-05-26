/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ListContent from '../serializer/ListSerializer';

function SmartList({ type, listItems }) {
  const fontStyles = {
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
  };

  const selectedStyle = listItems[0].content[0].style;
  const listStyle = fontStyles[selectedStyle] || 'body1';
  const currentTheme = useTheme();

  console.log(listStyle);
  console.log(currentTheme.typography[listStyle]);

  return (
    <>
      {type === 'ordered' && (
        // this style is for solution #2
        <ol style={{ listStylePosition: 'inside', listStyle: 'none' }}>
          {listItems.map((li) => {
            const appliedStyle = li.content[0].style;
            return (
              <Typography
                variant={fontStyles[appliedStyle] || 'body1'}
                component="li"
                key={li._key}
              >
                <ListContent blocks={li.content} />
              </Typography>
            );
          })}
        </ol>
      )}
      {type === 'unordered' && (
        <ul>
          {listItems.map((li) => {
            const appliedStyle = li.content[0].style;
            return (
              <Typography
                variant={fontStyles[appliedStyle] || 'body1'}
                component="li"
                key={li._key}
              >
                <ListContent blocks={li.content} />
              </Typography>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default SmartList;
