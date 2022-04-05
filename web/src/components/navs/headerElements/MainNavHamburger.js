import React from 'react';
import { navigate } from 'gatsby';
import {
  Box,
  Dialog,
  ListItemText,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  Slide,
} from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
import { Link, IconButton } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import NavItem from './NavItem';
import NavPhone from './NavPhone';
import NavGroup from './NavGroupHamburger';
import { mapNavItemToProps } from '../../../lib/mapToProps';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  list: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    color: theme.palette.common.white,
  },
}));

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function MainNavHamburger({ topMenu, bottomMenu }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickSubNavMenu = (menuLink) => {
    navigate(`/${menuLink}`);
  };

  return (
    <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
      <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClickOpen}>
        <Menu />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{ className: classes.list }}
      >
        <AppBar className={classes.appBar} component="nav">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }} role="menubar">
            {topMenu.map((group) => {
              const { _type, _key: groupKey } = group;
              const mobileBrand =
                _type === 'navBrand'
                  ? group.brandGroup.filter((x) => x.type === 'mobile')[0]
                  : null;
              const url = _type === 'navBrand' ? group.nav.slug.current : null;

              switch (_type) {
                case 'navBrand':
                  return (
                    <Box
                      display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}
                      key={groupKey}
                    >
                      <Link to={`/${url}`}>
                        <img
                          src={mobileBrand.brand.logo.asset.url}
                          alt={mobileBrand.brand.title}
                          height={mobileBrand.height}
                        />
                      </Link>
                    </Box>
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
                    >
                      <NavItem {...mapNavItemToProps(group)} />
                    </Box>
                  );
                case 'navGroup':
                  return <div>Nav Group is not allowed in the top menu</div>;

                default:
                  return <div>under construction</div>;
              }
            })}
            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List className={classes.list} role="menu">
          {bottomMenu.map((group, index) => {
            const { _type, title, nav: groupNav, _key } = group;
            switch (_type) {
              case 'navItem':
                return (
                  <React.Fragment key={_key}>
                    {index === 0 ? null : <Divider />}
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <ListItem button onClick={() => handleClickSubNavMenu(groupNav.slug.current)}>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Box>
                  </React.Fragment>
                );
              case 'navGroup':
                return <NavGroup key={_key} navGroup={group} index={index} />;

              default:
                return <div key={_key}>under construction</div>;
            }
          })}
        </List>
      </Dialog>
    </Box>
  );
}

export default MainNavHamburger;
