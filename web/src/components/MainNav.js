import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Box, Container, Toolbar } from '@material-ui/core';
import NavItem from './NavItem';
import NavGroup from './NavGroup';
import NavBrand from './NavBrand';
import NavPhone from './NavPhone';
import MainNavHamburger from './MainNavHamburger';

import { mapNavBrandToProps, mapNavItemToProps, mapNavGroupToProps } from '../lib/mapToProps';

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
  const [hoveredElement, setHoveredElement] = useState(null);
  const [hoveredItemText, setHoveredItemText] = useState(null);

  const handleOnHover = (event) => {
    console.log('event target');
    console.log(event.target);
    console.log('current target');
    console.log(event.currentTarget);
    if (event.target !== hoveredElement) {
      console.log('event target text content');
      console.log(event.target.textContent);
      console.log('handle over if statement is triggered');
      setHoveredElement(event.target);
      setHoveredItemText(event.target.textContent);
    }
  };
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
                    {menuGroup.map((group) => {
                      const { _type, _key: groupKey } = group;

                      switch (_type) {
                        case 'navBrand':
                          return (
                            <NavBrand
                              {...mapNavBrandToProps(group)}
                              key={groupKey}
                              onMouseEnter={(e) => handleOnHover(e)}
                            />
                          );
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
                              onMouseEnter={(e) => handleOnHover(e)}
                            >
                              <NavItem {...mapNavItemToProps(group)} location={location} />
                            </Box>
                          );
                        case 'navGroup':
                          console.log('group title equals hovered item text?');
                          console.log(group.title === hoveredItemText);
                          console.log(group.title);
                          console.log(hoveredItemText);
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
                              onMouseEnter={(e) => handleOnHover(e)}
                            >
                              <NavGroup
                                {...mapNavGroupToProps(group)}
                                location={location}
                                isOpen={group.title === hoveredItemText}
                              />
                            </Box>
                          );

                        default:
                          return <div>under construction</div>;
                      }
                    })}
                    {menuIndex === 0 && (
                      <MainNavHamburger
                        menu={data.sanityNavMenu.menuArray[1]}
                        brand={
                          data.sanityNavMenu.menuArray[0].menuGroup.filter(
                            (x) => x._type === 'navBrand',
                          )[0]
                        }
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

export default function MyMainNav(props) {
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
        }
      `}
      render={(data) => <MainNav data={data} {...props} />}
    />
  );
}
