import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Container, Stack, Theme, Typography, colors, useMediaQuery } from '@mui/material';

const BackgroundImage = 'https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const backgroundStyles = {
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '100vh',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
};

export const Process = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  
  const AppTimeLine = () => (
    <Box width={isSmallScreen ? 'auto' : '50%'}>
      <Timeline position="alternate-reverse" sx={{margin:0, padding:0}}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color='primary' />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Reunião</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color='primary' />
            <TimelineConnector color='primary' />
          </TimelineSeparator>
          <TimelineContent>Prototipação</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color='primary' />
            <TimelineConnector color='primary' />
          </TimelineSeparator>
          <TimelineContent>Aprovação</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color='primary' />
          </TimelineSeparator>
          <TimelineContent>Desenvolvimento</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );

  return(
    <div id="process" style={backgroundStyles}>
      <Box flex='1'>
        <Container>
          <Stack spacing={4}>
            <Typography variant='h4'>Nosso processo de desenvolvimento</Typography>
            <Stack direction={isSmallScreen ? 'column-reverse' : 'row'} justifyContent='space-between' spacing={2}>
              <Stack spacing={2} width={isSmallScreen ? 'auto' : '50%'} >
                <Typography variant='body1' align='justify'>Conosco, durante todo o processo de desenvolvimento, o <strong>cliente é um pilar essencial</strong> para o resultado correto do produto, participando das reuniões e aprovando os protótipos. Desse modo, garantimos a solução que ele <strong>necessita</strong>!</Typography>
                <Typography variant='body1' align='justify'>Além disso, para evitar longos períodos de espera, entregamos o produto por partes (incrementos) capazes de <strong>resolver</strong> o problema enquanto desenvolvemos evoluções e novas funcionalidades para aprimorar a experiencia do usuário.</Typography>
              </Stack>
              <AppTimeLine />
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};