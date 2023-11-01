import { Box, Button, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Background from '../assets/home-background.png';

export const Home = () => {
  return (
    <Box>
      <img src={Background} alt="background" />
      <Box>
        <Typography variant="h1">Lovelace Lines</Typography>
        <Typography variant="body1">Desenvolvendo soluções de modo descomplicado!</Typography>
      </Box>
      <Button variant='outlined' endIcon={<KeyboardArrowDownIcon />}>
        Veja mais
      </Button>
    </Box>
  );
};