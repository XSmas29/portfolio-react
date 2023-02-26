import { AppBar, Box, Button, IconButton, Toolbar } from '@mui/material';
import ThemeSwitch from '@components/misc/themeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '@store/slice/mode';
// import NavbarLink from './navbarLink';
import { Slide } from '@mui/material';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { changeOpen } from '@store/slice/sidebar';
import { BreakPointKeys } from 'src/types';

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.mode);
  const sidebar = useSelector((state: any) => state.sidebar);
  const theme = useTheme();

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