import { Box, Typography } from '@mui/material';
import Illustration from '../assets/about-illustration.png';

export const About = () => {
  return (
    <Box>
      <img src={Illustration} alt="Imagem ilustrativa" />
      <Box>
        <Typography variant="h1">Quem somos?</Typography>
        <Box>
          <Typography variant="body1">
            Nós somos um grupo de juniores apaixonados pelo desenvolvimento, comprometidos em impulsionar o sucesso das pequenas empresas. 
          </ Typography>
          <Typography variant="body1">
            Nosso foco principal é fornecer <strong>soluções escaláveis</strong> que se ajustam perfeitamente ao ritmo de crescimento de cada empreendimento.
          </Typography>
          <Typography variant="body1">
            Além disso, estamos orgulhosos de oferecer <strong>softwares gratuitos</strong>, sempre que possível, graças a dedicação dos nossos desenvolvedores.
          </Typography>
          <Typography variant="body1">
            Por conta disso, infelizmente, não podemos desenvolver ou manter online qualquer tipo de software, nos limitando a empresas com regras de negócios simples e estáticas.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};