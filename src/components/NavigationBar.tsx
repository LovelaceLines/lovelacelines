import { AppBar, Box, Button, Container, IconButton, Link, SvgIcon, Toolbar } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import logo from '../assets/logo.svg';
import logoAlternative from '../assets/logo.alternative.svg';
import { useTheme } from '../shared/themes';
import { Link as ScrollLink } from 'react-scroll';


export const NavigationBar = () => {
  const { themeName, toggleTheme } = useTheme();

  return (
    <AppBar style={{height:'56px'}}>
      <Container>
        <Toolbar>
          <Box>
            <img src={logo} alt='Logo' style={{height:'24px'}}/>
          </Box>
          <Box>
            <ScrollLink to="home" smooth={true} duration={500}>Início</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>Sobre</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>Soluções</ScrollLink>
            <ScrollLink to="process" smooth={true} duration={500}>Desenvolvimento</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>Contato</ScrollLink>
          </Box>
          <Box>
            <IconButton onClick={toggleTheme}>
              {themeName === 'light' ? <Brightness4Icon /> : <Brightness5Icon />}
            </IconButton>
            <IconButton><LinkedInIcon /></IconButton>
            <IconButton><GitHubIcon /></IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};