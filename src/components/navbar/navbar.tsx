import { Link } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import ThemeSwitch from '@components/misc/themeSwitch';
import { useDispatch } from 'react-redux';
import { changeMode } from '@store/slice/mode';
import NavbarLink from './navbarLink';


const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Box>
      <AppBar 
        position="static"
        color='primary'
      >
        <Toolbar
          sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <IconButton
              size="large"
              edge="start"
              color='inherit'
            >
              <Menu />
            </IconButton>
              <NavbarLink
                title="Home" 
                url="/" 
              />
              <NavbarLink 
                title="Education" 
                url="/education" 
              />
              <NavbarLink 
                title="Experience"
                url="/experience" 
              />
          </div>
          <div>
            <ThemeSwitch 
              sx={{ mr: 3 }}
              onChange={(evt, val) => dispatch(changeMode(val === true ? 'dark' : 'light'))}
            />
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;