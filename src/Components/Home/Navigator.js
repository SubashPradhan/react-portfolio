import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import { NavLink } from 'react-router-dom'
import { useStyles } from '../Style/NavigationStyle'
import VisibilityIcon from '@material-ui/icons/Visibility';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import '../Style/App.css'

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(prev => !prev);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return <div className={classes.root}>
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
          [classes.appBar]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <h2>Subash Pradhan</h2>
        </Toolbar>
      </AppBar>
    </ClickAwayListener>
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
      open={open}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List component="nav">
        <NavLink to='/'>
          <ListItem button>
            <ListItemIcon >
              <HomeIcon color='error' className={classes.iconHover} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink to='/Portfolio'>
          <ListItem button>
            <ListItemIcon>
              <StorageRoundedIcon className={classes.iconHover} />
            </ListItemIcon>
            <ListItemText primary="Storage" />
          </ListItem>
        </NavLink>
        <NavLink to='/About'>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon className={classes.iconHover} />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </NavLink>
        <NavLink to='/Skills'>
          <ListItem button>
            <ListItemIcon>
              <VisibilityIcon className={classes.iconHover} />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItem>
        </NavLink>
        <NavLink to='/Contact'>
          <ListItem button>
            <ListItemIcon>
              <InfoTwoToneIcon className={classes.iconHover} />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  </div>
}
