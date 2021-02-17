/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import createStore from '../../state/createStore';

const ThemeProvider = ({ children, data }) => {
  const store = createStore();
  console.log('redux mode is running');
  console.log(data);

  const theme2 = createMuiTheme({
    palette: {
      primary: {
        main: '#f0f0f0',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
      tertiary: {
        main: '#f00',
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
      <ThemeTopLayout theme={theme2}>{children}</ThemeTopLayout>
    </Provider>
  );
};

export default function TopLayout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
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
