import { Box, Button, Container, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BackgroundImage from '../../assets/home-background.png';

const backgroundStyles = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  height: '100vh',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
};

export const Home = () => {
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