import { Box, Container, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contact = () => {
  return (
    <Container>
      <Typography variant="h1">Contato</Typography>
      <Typography variant="body1">Entre em contato conosco, vamos nos reunir e entender as suas necessitades!</Typography>
      <Box>
        <WhatsAppIcon />
        <InstagramIcon />
        <EmailIcon />
      </Box>
      <Typography variant="h6">Nos siga também em</Typography>
      <Box>
        <LinkedInIcon />
        <GitHubIcon />
      </Box>
    </Container>
  );
};