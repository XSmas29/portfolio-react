import { Link } from 'react-router-dom';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar 
        position="static"
        color='primary'
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color='inherit'
          >
            <Menu />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;