'use client'

import { Box, Button, Container, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const backgroundStyles = {
  backgroundImage: `url(https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  height: '100vh',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
};

export const Init = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  
  return (
    <div id="home" style={backgroundStyles}>
      <Box flex='1'>
        <Container>
          <Stack alignItems='flex-start' spacing={4}>
            <Box>
              <Typography color='primary.contrastText' variant={isSmallScreen ? 'h2' : 'h1'}>Lovelace Lines</Typography>
              <Typography color='primary.contrastText' variant="h6">Desenvolvendo soluções de modo descomplicado!</Typography>
            </Box>
            <Button variant='outlined' endIcon={<KeyboardArrowDownIcon />} href='#about'>
              Veja mais
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};