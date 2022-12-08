import React from 'react';
import { Button, Box } from '@material-ui/core';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { determineColor } from '../../lib/helperFunctions';

const useStyles = makeStyles({
  size: {
    padding: (props) => props.padding,
    textAlign: 'center',
  },
});

function ButtonInternalGlobal({
  idTag,
  text,
  variant,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  borderRadius,
  padding,
  link,
  colors,
  alignment,
  typography,
  bgImage,
}) {
  const { main, dark, contrastText } = colors;
  const mainColor = determineColor(main?.color);
  const darkColor = determineColor(dark?.color);
  const contrastTextColor = determineColor(contrastText?.color);
  const hoverOverlay = dark.color.rgb;

  const theme = createTheme({
    palette: {
      primary: {
        main: mainColor,
        dark: darkColor,
        contrastText: contrastTextColor,
      },
    },
    shape: {
      borderRadius: borderRadius || '4px',
    },
    typography: {
      button: {
        fontFamily: typography?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.fontWeight || 500,
        fontSize: typography?.fontSize || '0.875rem',
        lineHeight: typography?.lineHeight || 1.75,
        letterSpacing: typography?.letterSpacing || '0.02857em',
        textTransform: 'none',
      },
    },
    overrides: {
      MuiButton: {
        root: {
          background: bgImage && `url(${bgImage})`,
          '&:hover': {
            background:
              bgImage &&
              `linear-gradient(rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50), rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50)), url(${bgImage})`,
          },
          '@media (hover: none)': {
            background: bgImage && `url(${bgImage})`,
            '&:hover': {
              background:
                bgImage &&
                `linear-gradient(rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50), rgba(${hoverOverlay.r}, ${hoverOverlay.g}, ${hoverOverlay.b}, .50)), url(${bgImage})`,
            },
          },
        },
        contained: {
          '&:hover': {
            color: contrastTextColor,
          },
        },
      },
    },
  });

  const classes = useStyles({ padding, bgImage, hoverOverlay });
  const { href, newTab } = link[0];

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent={alignment}>
        <Button
          id={idTag}
          color="primary"
          variant={variant}
          disableElevation={disableElevation}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          className={classes.size}
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noopener' : undefined}
          href={href}
        >
          {text}
        </Button>
      </Box>
    </ThemeProvider>
  );
}
export default ButtonInternalGlobal;
