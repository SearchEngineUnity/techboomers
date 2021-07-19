import React from 'react';
import { Button as InternalBtn } from 'gatsby-theme-material-ui';
import { Button, Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { determinColor } from '../lib/helperFunctions';

function BtnBlockMui({
  idTag,
  text,
  variant,
  size,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  link,
  colors,
  alignment,
}) {
  const { main, dark, contrastText } = colors;
  const mainColor = determinColor(main?.color);
  const darkColor = determinColor(dark?.color);
  const contrastTextColor = determinColor(contrastText?.color);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: mainColor,
        dark: darkColor,
        contrastText: contrastTextColor,
      },
    },
  });

  console.log(disableRipple);

  const internal = link[0]._type === 'internalLink';
  const external = link[0]._type === 'externalLink';

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign={alignment}>
        {internal ? (
          <InternalBtn
            id={idTag}
            color="primary"
            variant={variant}
            size={size}
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            fullWidth={fullWidth}
            to={`/${link[0].reference.slug.current}`}
          >
            {text}
          </InternalBtn>
        ) : (
          <Button
            id={idTag}
            color="primary"
            variant={variant}
            size={size}
            disableElevation={disableElevation}
            disableFocusRipple={disableFocusRipple}
            disableRipple={disableRipple}
            fullWidth={fullWidth}
            tartget={external ? '_blank' : ''}
            rel={external ? 'noopener noreferrer' : ''}
            href={external ? link[0].reference.href : `#${link[0].reference.hashId}`}
          >
            {text}
          </Button>
        )}
      </Box>
    </ThemeProvider>
  );
}
export default BtnBlockMui;
