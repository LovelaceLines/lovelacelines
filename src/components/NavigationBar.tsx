import { AppBar, Box, Container, IconButton, Link, Menu, MenuItem, Stack, Theme, Toolbar, useMediaQuery } from '@mui/material';
import { Brightness4, Brightness5, GitHub, LinkedIn, Menu as MenuIcon } from '@mui/icons-material';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.svg';
import { useTheme } from '../shared/themes';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const NavigationBar = () => { 
  const { themeName, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navLinks = [
    { to: 'home', text: 'Início' },
    { to: 'about', text: 'Sobre' },
    { to: 'projects', text: 'Soluções' },
    { to: 'process', text: 'Desenvolvimento' },
    { to: 'contact', text: 'Contato' },
    { to: 'blog', text: 'Blog'},
  ];
  
  const socialLinks = [
    { url: 'https://www.linkedin.com/in/lovelacelines/', icon: <LinkedIn /> },
    { url: 'https://github.com/LovelaceLines', icon: <GitHub /> },
  ];

  const Logo = ({src}: {src: string}) => (
    <Link href='/home' underline='none'>
      <Stack>
        <img src={src} alt='Logo' style={{ height: '30px' }} />
      </Stack>
    </Link>
  );

  const NavigationLinks = () => (
    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={isSmallScreen ? 0 : 4} color='inherit'>
      {navLinks.map(link => 
        link.to === 'blog' ?
          <Link key={link.to} href='blog' underline='none' color='primary.contrastText'>
            <MenuItem onClick={handleCloseNavMenu}>{link.text}</MenuItem>
          </Link>
          : path === 'home' ?
            <ScrollLink key={link.to} to={link.to} smooth duration={500}>
              <MenuItem onClick={handleCloseNavMenu}>{link.text}</MenuItem>
            </ScrollLink>
            : path === 'blog' ?
              <Link key={link.to} href='home' underline='none' color='primary.contrastText'>
                <MenuItem onClick={handleCloseNavMenu}>{link.text}</MenuItem>
              </Link>
              : null
      )}
    </Stack>
  );

  const SocialLinks = () => (
    <Box>
      <IconButton onClick={toggleTheme} color='inherit'>
        {themeName === 'light' ? <Brightness4 /> : <Brightness5 />}
      </IconButton>
      {isSmallScreen ? null : socialLinks.map((link) => (
        <IconButton key={link.url} color='inherit' href={link.url} target='_blank' rel='noreferrer'>
          {link.icon}
        </IconButton>
      ))}
    </Box>
  );

  const HamburgerMenu = () => (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton onClick={handleOpenNavMenu} size='large' color='inherit' >
        <MenuIcon />
      </IconButton>
      <Menu 
        anchorEl={anchorElNav} 
        open={Boolean(anchorElNav)} 
        onClose={handleCloseNavMenu}
        keepMounted
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}>
        <NavigationLinks />
      </Menu>
    </Box>
  );

  return (
    <AppBar>
      <Container>
        <Toolbar disableGutters>
          <Stack flex='1' alignItems='center' direction='row' justifyContent='space-between'>
            <HamburgerMenu />
            <Logo src={logo} />
            <Box sx={{ display: { xs:'none', md: 'flex' } }}>
              <NavigationLinks />
            </Box>
            <SocialLinks />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
