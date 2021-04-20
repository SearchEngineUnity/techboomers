import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Box, Container, Divider, Grid, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby-theme-material-ui';
import NavBrand from './NavBrand';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';
import FooterGroup from './FooterGroup';
import FooterItem from './FooterItem';

import { mapNavBrandToProps, mapNavItemToProps, mapNavGroupToProps } from '../lib/mapToProps';

const useStyles = makeStyles((theme) => ({
  divider: {
    backgroundColor: theme.palette.common.white,
  },
  grow: {
    flexGrow: 1,
  },
  copyright: {
    mr: theme.spacing(1),
  },
}));

const MainFooter = ({ location, data }) => {
  const classes = useStyles();
  console.log(data);
  const { sanityCompanyInfo: companyInfo, sanityNavMenu: footerMenu } = data;

  const { menuArray } = footerMenu;
  console.log(menuArray);
  return (
    <Box component="footer" color="common.white" bgcolor="grey.700" fontSize={14}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {menuArray.map((group) => (
            <Grid item xs={12} lg={3} key={group._key}>
              {group.menuGroup.map((item) => {
                switch (item._type) {
                  case 'navBrand':
                    return (
                      <React.Fragment key={item._key}>
                        <NavBrand {...mapNavBrandToProps(item)} />
                        <ContactInfo />
                      </React.Fragment>
                    );
                  case 'navItem':
                    return <div>this is a nav item</div>;
                  case 'navGroup':
                    return <div>this is a nav group</div>;
                  default:
                    return <div key={item._key}>under construction</div>;
                }
              })}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Divider className={classes.divider} />
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box component="p" mr={2}>
            &#0169; Copyright {new Date().getFullYear()} {companyInfo.name}
          </Box>
          <Link to="https://google.com">Privacy Policy</Link>
          <div className={classes.grow} />
          <SocialMedia />
        </Toolbar>
      </Container>
    </Box>
  );
};

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
