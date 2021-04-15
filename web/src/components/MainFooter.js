import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Box, Container } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import NavBrand from './NavBrand';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';
import FooterGroup from './FooterGroup';
import FooterItem from './FooterItem';

const MainFooter = ({ url, brandGroup, location }) => (
  <>
    <Box>
      <Box component={Container}>
        <NavBrand />
        <ContactInfo />
      </Box>
      <Box component={Container} />
      <ul>Bolded Title Nav Group maybe with also list items under</ul>
      <li>List item only Nav Item</li>
      <Box component={Container} />
    </Box>
    <Box>
      <Box>
        <p>
          Copyright{new Date().getFullYear()}
          <Link to="https://google.com">Privacy Policy</Link>
        </p>
      </Box>
    </Box>
    <SocialMedia />
  </>
);

export default function Footer(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityNavMenu(type: { eq: "mainFooter" }) {
            type
            menuArray {
              _key
              menuGroup {
                ... on SanityNavBrand {
                  _key
                  _type
                  brandGroup {
                    height
                    type
                    brand {
                      title
                      _id
                      logo {
                        asset {
                          url
                        }
                      }
                    }
                  }
                  nav {
                    slug {
                      current
                    }
                  }
                }
                ... on SanityNavGroup {
                  _key
                  _type
                  title
                  nav {
                    ... on SanitySpGuide {
                      slug {
                        current
                      }
                      _id
                    }
                    ... on SanityPage {
                      slug {
                        current
                      }
                      _id
                    }
                  }
                  group {
                    title
                    isButton
                    icon
                    nav {
                      ... on SanityPage {
                        slug {
                          current
                        }
                      }
                      ... on SanitySpGuide {
                        slug {
                          current
                        }
                      }
                    }
                    _key
                  }
                }
                ... on SanityNavItem {
                  _key
                  _type
                  isButton
                  title
                  nav {
                    ... on SanityPage {
                      slug {
                        current
                      }
                    }
                    ... on SanitySpGuide {
                      slug {
                        current
                      }
                    }
                  }
                }
                ... on SanityNavPhone {
                  _key
                  _type
                  text
                }
              }
            }
          }
          sanityCompanyInfo {
            name
          }
        }
      `}
      render={(data) => <MainFooter data={data} {...props} />}
    />
  );
}
