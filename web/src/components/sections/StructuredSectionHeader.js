import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Subtitle from '../portableText/serializer/H2SubtitleSerializer';

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 16,
    },
  },
}));
function StructuredSectionHeader({
  heading,
  subheading,
  subtitle,
  headingColor,
  subheadingColor,
  subtitleColor,
  align,
  hasSectionHeading,
  hasSectionSubheading,
  hasSectionSubtitle,
}) {
  const classes = useStyles();

  return (
    <>
      {(!hasSectionHeading && heading) ||
      (!hasSectionSubheading && subheading) ||
      (!hasSectionSubtitle && subtitle) ? (
        <Box
          component={heading ? 'header' : 'div'}
          mb={4}
          textAlign={align}
          className={classes.header}
        >
          {!hasSectionHeading && heading && (
            <Box component={Typography} variant="h2" gutterBottom color={headingColor}>
              {heading}
            </Box>
          )}
          {!hasSectionSubheading && subheading && (
            <Box component={Typography} variant="h3" gutterBottom color={subheadingColor}>
              {subheading}
            </Box>
          )}
          {!hasSectionSubtitle && subtitle && (
            <Box color={subtitleColor}>
              <Subtitle blocks={subtitle} />
            </Box>
          )}
        </Box>
      ) : null}
    </>
  );
}
export default StructuredSectionHeader;
