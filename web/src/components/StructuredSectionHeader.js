import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Subtitle from './block-contents/H2SubtitleSerializer';

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
    },
  },
}));

function StructuredSectionHeader({ heading, subtitle, colorOverrides, align, hasSectionHeading }) {
  console.log(heading);
  const classes = useStyles();
  return (
    <>
      {heading || subtitle ? (
        <Box
          component={hasSectionHeading ? 'div' : 'header'}
          mb={4}
          textAlign={align}
          className={classes.header}
        >
          {!hasSectionHeading && heading && (
            <Box
              component={Typography}
              variant="h2"
              gutterBottom
              color={
                colorOverrides?.heading?.hex || colorOverrides?.foreground?.hex || 'text.primary'
              }
            >
              {heading}
            </Box>
          )}

          {subtitle && (
            <Box
              color={
                colorOverrides?.subtitle?.hex || colorOverrides?.foreground?.hex || 'text.primary'
              }
            >
              <Subtitle blocks={subtitle} />
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
}

export default StructuredSectionHeader;
