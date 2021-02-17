/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import createStore from '../../state/createStore';

const ThemeProvider = ({ children, data }) => {
  const store = createStore();
  console.log('redux mode is running');

  const { sanityPalette: palette } = data;
  console.log(palette);

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: palette?.primary?.light?.hex || '#7986cb',
        main: palette?.primary?.main?.hex || '#3f51b5',
        dark: palette?.primary?.dark?.hex || '#303f9f',
        contrastText: palette?.primary?.contrastText?.hex || '#fff',
      },
      secondary: {
        light: palette?.secondary?.light?.hex || '#ff4081',
        main: palette?.secondary?.main?.hex || '#f50057',
        dark: palette?.secondary?.dark?.hex || '#c51162',
        contrastText: palette?.secondary?.contrastText?.hex || '#fff',
      },
      hlbox: {
        important: '',
        warming: '',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });

  return (
    <Provider store={store}>
      <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>
    </Provider>
  );
};

export default function TopLayout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          sanityPalette {
            primary {
              dark {
                hex
              }
              contrastText {
                hex
              }
              light {
                hex
              }
              main {
                hex
              }
            }
            secondary {
              dark {
                hex
              }
              contrastText {
                hex
              }
              light {
                hex
              }
              main {
                hex
              }
            }
            protip {
              bgColor {
                hex
              }
              borderColor {
                hex
              }
              iconColor {
                hex
              }
              textColor {
                hex
              }
            }
            definition {
              bgColor {
                hex
              }
              borderColor {
                hex
              }
              iconColor {
                hex
              }
              textColor {
                hex
              }
            }
            important {
              bgColor {
                hex
              }
              borderColor {
                hex
              }
              iconColor {
                hex
              }
              textColor {
                hex
              }
            }
            warning {
              bgColor {
                hex
              }
              borderColor {
                hex
              }
              iconColor {
                hex
              }
              textColor {
                hex
              }
            }
            dyk {
              bgColor {
                hex
              }
              borderColor {
                hex
              }
              iconColor {
                hex
              }
              textColor {
                hex
              }
            }
          }
        }
      `}
      render={(data) => <ThemeProvider data={data}>{children}</ThemeProvider>}
    />
  );
}

// Header.propTypes = {
//   data: PropTypes.shape({
//     site: PropTypes.shape({
//       siteMetadata: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   }).isRequired,
// }
