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
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Home, School, Stars, Close, GitHub, RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material';
import Navbar from '@components/navbar/navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveTab, changeOpen } from '@store/slice/sidebar';
import { BreakPointKeys } from 'src/types';

const drawerWidth = 240;
const menuList = [
  {
    id: 1,
    title: 'Home',
    icon: <Home />,
    link: '/',
  },
  {
    id: 2,
    title: 'Education',
    icon: <School />,
    link: '/education',
  },
  {
    id: 3,
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

const Drawer = styled(MuiDrawer)(
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
  const theme = useTheme();
  const [keepOpen, setKeepOpen] = React.useState(false);
  const sideBar = useSelector((state: any) => state.sidebar);
  const dispatch = useDispatch();

  const xl = useMediaQuery(theme.breakpoints.up('xl'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const xs = useMediaQuery(theme.breakpoints.up('xs'));

  const resolveBreakpoint = (key: BreakPointKeys) => {
    if (key === 'xl') return xl;
    if (key === 'lg') return lg;
    if (key === 'md') return md;
    if (key === 'sm') return sm;
    if (key === 'xs') return xs;
    return xs;
  };
  
  const isOpen = () => {
    return keepOpen ? keepOpen : sideBar.isOpen;
  };
  
  const toggleKeepOpen = () => {
    setKeepOpen(!keepOpen);
  };

  return (
    <Box 
      sx={{ display: 'flex' }}
    >
      <Drawer
        variant={resolveBreakpoint('md') ? 'permanent' : 'temporary'}
        open={isOpen()}
        onMouseEnter={() => resolveBreakpoint('md') ? dispatch(changeOpen(true)) : () => null}
        onMouseLeave={() => resolveBreakpoint('md') ? dispatch(changeOpen(false)) : () => null}
      >
        <DrawerHeader
          sx={!isOpen() ? { justifyContent: 'center' } : null}
        >
          
          {resolveBreakpoint('md') ?
            <IconButton onClick={ toggleKeepOpen }>
              {keepOpen ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
            </IconButton>
            : 
            <IconButton
              size="large"
              edge="start"
              onClick={() => dispatch(changeOpen(false))}
            >
              <Close />
            </IconButton> 
          }
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
            <ListItem key={item.title} 
              disablePadding sx={{ display: 'block' }}
            >
              <Link 
                to={item.link} 
                style={{
                  textDecoration: 'none', 
                  color: 'inherit',
                }}
                onClick={() => {
                  dispatch(changeActiveTab(item.id));
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: isOpen() ? 'initial' : 'center',
                    px: 2.5,
                    backgroundColor: sideBar.activeTab === item.id ? 'secondary.main' : 'transparent',
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