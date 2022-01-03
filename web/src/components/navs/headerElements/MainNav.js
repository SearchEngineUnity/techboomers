import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Container, Toolbar } from '@material-ui/core';
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import NavBrand from './NavBrand';
import NavPhone from './NavPhone';
import MainNavHamburger from './MainNavHamburger';
import { mapNavBrandToProps, mapNavItemToProps, mapNavGroupToProps } from '../../../lib/mapToProps';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  img: {
    height: 32,
    width: 'auto',
    margin: 'auto',
  },
}));

const MainNav = ({ data, location }) => {
  const classes = useStyles();

  return (
    <>
      {data.sanityNavMenu && (
        <AppBar position="static" className={classes.appBar}>
          <Container maxWidth="lg">
            {data.sanityNavMenu.menuArray.map((menu, menuIndex) => {
              const { menuGroup, _key } = menu;

              return (
                <Box
                  display={{
                    xs: menuIndex === 0 ? 'block' : 'none',
                    sm: menuIndex === 0 ? 'block' : 'none',
                    md: 'block',
                    lg: 'block',
                    xl: 'block',
                  }}
                  key={_key}
                >
                  <Toolbar
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    disableGutters
                  >
                    {menuGroup.map((group, index) => {
                      const { _type, _key: groupKey } = group;
                      const arrayLength = menuGroup.length;
                      let position = 'bottom-start';

                      if (index + 1 === arrayLength) {
                        position = 'bottom-end';
                      }

                      if (index > 0 && index + 1 < arrayLength) {
                        position = 'bottom';
                      }

                      switch (_type) {
                        case 'navBrand':
                          return <NavBrand {...mapNavBrandToProps(group)} key={groupKey} />;
                        case 'navPhone':
                          return <NavPhone text={group.text} key={groupKey} />;
                        case 'navItem':
                          return (
                            <Box
                              display={{
                                xs: 'none',
                                sm: 'block',
                                md: 'block',
                                lg: 'block',
                                xl: 'block',
                              }}
                              key={groupKey}
                            >
                              <NavItem {...mapNavItemToProps(group)} location={location} />
                            </Box>
                          );
                        case 'navGroup':
                          return (
                            <Box
                              display={{
                                xs: 'none',
                                sm: 'block',
                                md: 'block',
                                lg: 'block',
                                xl: 'block',
                              }}
                              key={groupKey}
                            >
                              <NavGroup
                                {...mapNavGroupToProps(group)}
                                location={location}
                                position={position}
                              />
                            </Box>
                          );

                        default:
                          return <div>under construction</div>;
                      }
                    })}
                    {menuIndex === 0 && (
                      <MainNavHamburger
                        bottomMenu={data.sanityNavMenu.menuArray[1].menuGroup}
                        topMenu={data.sanityNavMenu.menuArray[0].menuGroup}
                      />
                    )}
                  </Toolbar>
                </Box>
              );
            })}
          </Container>
        </AppBar>
      )}
    </>
  );
};

export default function MainNavigation(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityNavMenu(type: { eq: "mainNav" }) {
            type
            menuArray {
              _key
              menuGroup {
                ... on SanityNavBrand {
                  _key
                  _type
                  brandGroup {
                    _key
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
        }
      `}
      render={(data) => <MainNav data={data} {...props} />}
    />
  );
}
