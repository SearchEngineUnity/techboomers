/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import GlobalStyle from '../global/GlobalStyle';
import MainNav from '../components/MainNav';
import AltFooter from '../components/AltFooter';
import { mapMainNavToProps, mapMainFooterToProps } from '../lib/mapToProps';

const NavWrapper = styled.div`
  @media (max-width: 576px) {
    margin-top: 48px;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query AltLayoutQuery {
      sanityCompanyInfo {
        _key
        address1
        city
        email
        postalCode
        province
        name
      }
      sanityNavMenu(title: { eq: "Alt Navigation" }) {
        title
        _id
        menu {
          ... on SanityNavBrand {
            _key
            _type
            nav {
              slug {
                current
              }
            }
            brand {
              title
              logo {
                asset {
                  url
                }
              }
            }
          }
          ... on SanityNavJumpLink {
            _key
            _type
            link
            title
            isButton
          }
        }
      }
      allSanitySocialInfo {
        edges {
          node {
            _id
            social
            link
          }
        }
      }
      sanityCompanyLogo(title: { eq: "Sunny Guides logo white" }) {
        title
        logo {
          asset {
            url
          }
        }
      }
    }
  `);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Source+Sans+Pro:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <NavWrapper>
        <MainNav {...mapMainNavToProps(data.sanityNavMenu)} />
      </NavWrapper>
      <div style={{ flex: '1' }}>{children}</div>

      <AltFooter
        {...mapMainFooterToProps(
          data.sanityCompanyInfo,
          data.sanityCompanyLogo,
          data.allSanitySocialInfo,
        )}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
