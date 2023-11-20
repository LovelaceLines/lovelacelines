'use client'

import { AppBar, Box, Container, IconButton, Link as MUILink, Menu, MenuItem, Stack, Theme, Toolbar, useMediaQuery } from '@mui/material';
import { Brightness4, Brightness5, GitHub, LinkedIn, Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '../_theme/ThemeContext';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.svg';

const navLinks = [
  { to: '/home', text: 'Início' },
  { to: '/home#sobre', text: 'Sobre' },
  { to: '/home#solucoes', text: 'Soluções' },
  { to: '/home#desenvolvimento', text: 'Desenvolvimento' },
  { to: '/home#contato', text: 'Contato' },
  { to: '/blog', text: 'Blog'},
];

const socialLinks = [
  { url: 'https://www.linkedin.com/in/lovelacelines/', icon: <LinkedIn /> },
  { url: 'https://github.com/LovelaceLines', icon: <GitHub /> },
];

export const NavigationBar = () => { 
  const { themeName, toggleTheme } = useTheme();
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const pathname = usePathname();
  const path = pathname.split('/')[1];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const Logo = () => (
    <Link href='/home'>
      <Stack>
        <Image src={logo} alt='Logo' style={{ width:'30px', height:'30px' }} />
      </Stack>
    </Link>
  );

  const NavigationLinks = () => (
    <Stack direction={isSmallScreen ? 'column' : 'row'} spacing={isSmallScreen ? 0 : 4} color='inherit'>
      {navLinks.map(link => 
        <Link key={link.to} href={link.to} style={{ textDecoration: 'none', color: 'inherit'}}>
          <MenuItem onClick={handleCloseNavMenu}>{link.text}</MenuItem>
        </Link>
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
            <Logo />
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