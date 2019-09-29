import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import '../Style/App.css'

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    background: '#c5aa6a',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    background: '#363838',
    opacity: 0.8,
    zIndex: 1,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: '#0e101c',
    zIndex: 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconHover: {
    color: '#c5aa6a',
    '&:hover': {
      color: 'red',
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
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
  );
}
