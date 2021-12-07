import React from 'react';
import { navigate } from 'gatsby';
import {
  Box,
  Icon,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  Divider,
  Collapse,
} from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

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

const NavGroupHamburger = ({ navGroup, index }) => {
  const classes = useStyles();
  const [collapse, setCollapse] = React.useState(true);
  const handleClickCollapse = () => {
    setCollapse(!collapse);
  };
  const handleClickSubNavMenu = (menuLink) => {
    navigate(`/${menuLink}`);
  };
  return (
    <>
      {index === 0 ? null : <Divider />}
      <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ListItem button onClick={handleClickCollapse}>
          <ListItemText primary={navGroup.title} />
          {collapse ? <ExpandMore /> : <ExpandLess />}
        </ListItem>
      </Box>
      <Collapse in={!collapse} timeout="auto" unmountOnExit>
        {navGroup.group.map(({ icon, title: itemTitle, nav: itemNav, _key: itemKey }) => (
          <List component="div" disablePadding key={itemKey}>
            <ListItem
              button
              className={classes.nested}
              onClick={() => handleClickSubNavMenu(itemNav.slug.current)}
            >
              <ListItemIcon className={classes.icon}>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={itemTitle} />
            </ListItem>
          </List>
        ))}
      </Collapse>
    </>
  );
};

export default NavGroupHamburger;
