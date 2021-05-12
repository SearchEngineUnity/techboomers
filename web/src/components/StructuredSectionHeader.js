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

function StructuredSectionHeader({ h2, subtitle, colorOverrides, align, hasSectionH2 }) {
  const classes = useStyles();
  return (
    <>
      {h2 || subtitle ? (
        <Box
          component={hasSectionH2 ? 'div' : 'header'}
          mb={4}
          textAlign={align}
          className={classes.header}
        >
          {!hasSectionH2 && h2 && (
            <Box
              component={Typography}
              variant="h2"
              gutterBottom
              color={
                colorOverrides?.title?.hex || colorOverrides?.foreground?.hex || 'text.primary'
              }
            >
              {h2}
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
