import { Typography } from "@mui/material"

type navbarLinkProps = {
  title: string
  url: string
}

const NavbarLink = ({ title, url }: navbarLinkProps) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href={url}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        mx: 4,
      }}
    >
      {title}
    </Typography>
  )
}

export default NavbarLink