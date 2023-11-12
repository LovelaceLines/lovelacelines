import { Box, Container, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import BackgroundImage from '../assets/about-illustration.png';
import {FeedInstagram} from  '../components';

export const About = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const Texts = () => (
    <Stack width={isSmallScreen ? 'auto' : '50%'} spacing={4}>
      <Typography variant="h4">Quem somos?</Typography>
      <Stack spacing={1}>
        <Typography variant="body1" align='justify'>
          Nós somos um grupo de juniores apaixonados pelo desenvolvimento, comprometidos em impulsionar o sucesso das pequenas empresas. 
        </ Typography>
        <Typography variant="body1" align='justify'>
          Nosso foco principal é fornecer <strong>soluções escaláveis</strong> que se ajustam perfeitamente ao ritmo de crescimento de cada empreendimento.
        </Typography>
        <Typography variant="body1" align='justify'>
          Além disso, estamos orgulhosos de oferecer <strong>softwares gratuitos</strong>, sempre que possível, graças a dedicação dos nossos desenvolvedores.
        </Typography>
        <Typography variant="body1" align='justify'>
          Por conta disso, infelizmente, não podemos desenvolver ou manter online qualquer tipo de software, nos limitando a empresas com regras de negócios simples e estáticas.
        </Typography>
      </Stack>
    </Stack>
  );

  return (
    <Container>
      <Stack 
        id="about" 
        margin={isSmallScreen ? '20% 0' : '3% 0'} 
        flex='1' 
        position='relative' 
        direction={isSmallScreen ?  'column' : 'row'} 
        alignItems='center' 
        justifyContent='space-between'
      >
        <Texts />
        {isSmallScreen ? null : <img src={BackgroundImage} alt="Imagem ilustrativa" height='500px' />}
      </Stack>
      <FeedInstagram />
    </Container>
  );
};