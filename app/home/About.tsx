'use client'

import { Box, Container, Link, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { InstagramFeed } from  '@/_components/InstagramFeed';
import Image from 'next/image';

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
        id="sobre" 
        margin={isSmallScreen ? '20% 0' : '3% 0'} 
        spacing={2}
        flex='1' 
        position='relative' 
        direction={isSmallScreen ?  'column' : 'row'} 
        alignItems='center' 
        justifyContent='space-between'
      >
        <Texts />
        {isSmallScreen ? null : <Image src='https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Imagem ilustrativa" width={768} height={1024} style={{ width: '500px', height: 'auto', objectFit: 'cover' }} />}
      </Stack>
      < InstagramFeed  />
    </Container>
  );
};