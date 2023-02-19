import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import { Menu } from '@mui/icons-material';
import ThemeSwitch from '@components/misc/themeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '@store/slice/mode';
import NavbarLink from './navbarLink';
import { Slide } from '@mui/material';


const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.mode);
  
  return (
      <Box
        sx={{
          p: 2,
        }}
      >
        <Slide 
          direction="down" 
          in={true} 
        >
          <AppBar 
            position="static"
            color='primary'
            sx={{
              borderRadius: 2,
              py: 1,
              backgroundColor: 'primary.main',
            }}
          >
            <Toolbar
              sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>
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
              </span>
              <div>
                <ThemeSwitch 
                  sx={{ mr: 3 }}
                  onChange={(evt, val) => dispatch(changeMode(val === true ? 'dark' : 'light'))}
                  checked={mode.value === 'dark' ? true : false}
                />
                <Button color="inherit">Login</Button>
              </div>
            </Toolbar>
          </AppBar>
        </Slide>
      </Box>
  );
};

export default Navbar;