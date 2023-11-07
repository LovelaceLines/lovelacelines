import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Container, Typography } from '@mui/material';

export const Process = () => {
  return(
    <Box id="process">
      <Container>
        <img src="https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="background" />
        <Typography>Nosso processo de desenvolvimento</Typography>
        <Box>
          <Box>
            <Typography>Conosco, durante todo o processo de desenvolvimento, o cliente é um pilar essencial para o resultado correto do produto, participando das reuniões e aprovando os protótipos. Desse modo, garantimos a solução que ele necessita!</Typography>
            <Typography>Além disso, para evitar longos períodos de espera, entregamos o produto por partes (incrementos) capazes de resolver o problema enquanto desenvolvemos evoluções e novas funcionalidades para aprimorar a experiencia do usuário.</Typography>
          </Box>
          <Timeline position="alternate-reverse">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Reunião</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Prototipação</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Aprovação</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
              </TimelineSeparator>
              <TimelineContent>Desenvolvimento</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};