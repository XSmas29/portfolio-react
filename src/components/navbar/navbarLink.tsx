import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { NavbarLinkProps } from 'src/types';



const NavbarLink = ({ title, url }: NavbarLinkProps) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="span"
      sx={{
        mx: 3,
      }}
    >
      <Link 
        to={url} 
        style={{
          textDecoration: 'none', 
          color: 'inherit',
        }}
      >
        {title}
      </Link>
    </Typography>
  );
};

export default NavbarLink;