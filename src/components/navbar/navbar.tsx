import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import ThemeSwitch from '@components/misc/themeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '@store/slice/mode';
// import NavbarLink from './navbarLink';
import { Slide } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { changeOpen } from '@store/slice/sidebar';
import { useBreakpoint } from '@composables/useBreakpoint';

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.mode);
  const sidebar = useSelector((state: any) => state.sidebar);

  const { resolveBreakpoint } = useBreakpoint();

  return (
      <Box
        sx={{
          p: 1,
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
                {!resolveBreakpoint('md') ? 
                  <IconButton
                    size="large"
                    edge="start"
                    color='inherit'
                    onClick={() =>{ dispatch(changeOpen(true)); console.log(sidebar);}}
                  >
                    <Menu />
                  </IconButton> 
                  : 
                  null
                }
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