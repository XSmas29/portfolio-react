import * as React from 'react';
import {
  ListItemText, 
  ListItemIcon, 
  ListItemButton, 
  ListItem, 
  List, 
  IconButton, 
  Divider, 
  Box, 
  Theme,
  CSSObject,
  styled,
  Drawer as MuiDrawer,
  Avatar,
  Paper,
  Typography,
} from '@mui/material';
import { Home, School, Stars, GitHub, RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material';
import Navbar from '@components/navbar/navbar';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const menuList = [
  {
    title: 'Home',
    icon: <Home />,
    link: '/',
  },
  {
    title: 'Education',
    icon: <School />,
    link: '/education',
  },
  {
    title: 'Experience',
    icon: <Stars />,
    link: '/experience',
  },
];

const contactList = [
  {
    title: 'Github',
    icon: <GitHub />,
    link: 'https://github.com/XSmas29',
  },
];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function AppDrawer(props: any) {
  const [open, setOpen] = React.useState(false);
  const [keepOpen, setKeepOpen] = React.useState(false);

  const isOpen = () => {
    if (keepOpen) {
      return true;
    }
    return open;
  };
  
  const toggleKeepOpen = () => {
    setKeepOpen(!keepOpen);
  };

  return (
    <Box 
      sx={{ display: 'flex' }}
    >
      <Drawer
        variant="permanent" 
        open={isOpen()}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DrawerHeader
          sx={!isOpen() ? { justifyContent: 'center' } : null}
        >
          <IconButton onClick={ toggleKeepOpen }>
          {keepOpen ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Paper 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            my: isOpen() ? 2 : 1,
          }}
          elevation={0}
        >
          <Avatar
            alt='My Picture' 
            src='/public/profile.png'
            sx={isOpen() ? { width: 160, height: 160, my: 2 } : { width: 50, height: 50 }}
          />
          {isOpen() ? 
            <Typography
              variant='h6'
              sx={{ fontWeight: 'bold' }}
            >
              Surya Bumantara
            </Typography>
            : null
          }
        </Paper>
        <Divider />
        <List>
          {menuList.map(item => (
            <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
              <Link 
                to={item.link} 
                style={{
                  textDecoration: 'none', 
                  color: 'inherit',
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isOpen() ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} sx={{ opacity: isOpen() ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {contactList.map(item => (
            <ListItem key={item.title} disablePadding sx={{ display: 'block' }}
              onClick={() => {
                window.open(item.link, '_blank');
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isOpen() ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpen() ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ opacity: isOpen() ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Navbar />
        {props.children}
      </Box>
    </Box>
  );
}