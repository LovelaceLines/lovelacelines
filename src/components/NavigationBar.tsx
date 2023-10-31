import { AppBar, Box, Container, SvgIcon, Toolbar } from '@mui/material';
import logo from '../assets/logo.svg';
import logoAlternative from '../assets/logo.alternative.svg';


export const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box>
            <img src={logo} alt='Logo' style={{width:'100%', height:'100%'}}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};