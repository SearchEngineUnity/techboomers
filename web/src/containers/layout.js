/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import MainNav from '../components/MainNav';
import MainFooter from '../components/MainFooter';

const Layout = ({ children, location }) => (
  <>
    <Helmet />
    <MainNav location={location} />
    <>{children}</>
    <MainFooter location={location} />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
