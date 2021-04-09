import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavItem from './NavItem';
import NavGroup from './NavGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
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

function MainNav({ navMenu }) {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <img
          className={classes.img}
          src="https://cdn.sanity.io/images/oo9q1e97/production/7ea20486067bb6f383daeb796e1952d0946c0f89-638x66.svg"
          alt="testimage"
        />
        <a href="phonenumber">CALL US Phone Number</a>
        <NavItem />
        <NavGroup />
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}

        <Typography variant="h4" className={classes.title}>
          News
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MainNav;
