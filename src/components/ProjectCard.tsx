import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, MobileStepper, Paper, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState } from 'react';

export interface IProjectCardProps {
  images: { path: string }[];
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  buttons: { name: string; link: string }[];
}

export const ProjectCard = (props: IProjectCardProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Card>
        <Paper>
          <CardMedia>
            <img
              src={props.images[activeStep].path}
              alt={`Step ${activeStep}`}
              style={{ width: '100%' }}
            />
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <IconButton size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              }
              backButton={
                <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
                  <KeyboardArrowLeftIcon />
                </IconButton>
              }
            />
          </CardMedia>
          <CardContent>
            <Box>
              <Typography>{props.startDate} • {props.endDate}</Typography>
              <Typography variant="h2">{props.title}</Typography>
              <Typography>{props.description}</Typography>
              <Box>
                {props.buttons.map((button, index) => (
                  <Button key={index} href={button.link}>{button.name}</Button>
                ))}
              </Box>
            </Box>
          </CardContent>
          <CardActions></CardActions>
        </Paper>
      </Card>
    </Container>
  );
};
