import { Box, Container, IconButton, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { WhatsApp, Instagram, Email, LinkedIn, GitHub } from '@mui/icons-material';

export const Contact = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  
  return (
    <Box id="contact" margin={isSmallScreen ? '10% 0' : '3% 0'}>
      <Container>
        <Stack spacing={1}>
          <Typography variant="h4">Contato</Typography>
          <Typography variant="body1">Entre em contato conosco, vamos nos reunir e entender as suas necessitades!</Typography>
          <Box>
            <IconButton href='https://wa.me/558892465315' target='_blank' rel='noreferrer' size='large'>
              <WhatsApp color='primary' fontSize='large'/>
            </IconButton>
            <IconButton href='https://instagram.com/lovelacelines' target='_blank' rel='noreferrer' size='large'>
              <Instagram color='primary' fontSize='large'/>
            </IconButton>
            <IconButton href='mailto:lovelacelines@gmail.com' target='_blank' rel='noreferrer' size='large'>
              <Email color='primary' fontSize='large'/>
            </IconButton>
          </Box>
          <Typography variant="h6">Nos siga também em</Typography>
          <Box>
            <IconButton href='https://www.linkedin.com/in/lovelacelines/' target='_blank' rel='noreferrer' size='large'>
              <LinkedIn color='primary' fontSize='large'/>
            </IconButton>
            <IconButton href='https://github.com/LovelaceLines' target='_blank' rel='noreferrer' size='large'>
              <GitHub color='primary' fontSize='large'/>
            </IconButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};