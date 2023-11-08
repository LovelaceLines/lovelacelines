import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, MobileStepper, Paper, Stack, Typography } from '@mui/material';
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

  const ImageStyle = {
    width: '100%', 
    aspectRatio: '16/9'
  };

  const Carousel = () => (
    <CardMedia style={{ 'position': 'relative' }}>
      <img src={props.images[activeStep].path} alt={`Step ${activeStep}`} style={ImageStyle} />
      <MobileStepper variant='dots' steps={maxSteps} position="static" activeStep={activeStep}
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
  );

  const Details = () => (
    <Box>
      <Typography variant='caption'>{props.startDate} • {props.endDate}</Typography>
      <Typography variant="h6">{props.title}</Typography>
      <Typography variant='body2'>{props.description}</Typography>
    </Box>
  );

  const Buttons = () => (
    <Stack direction='row' spacing={2}>
      {props.buttons.map((button, index) => (
        <Button variant='outlined' size='small' key={index} href={button.link}>{button.name}</Button>
      ))}
    </Stack>
  );

  return (
    <Card>
      <Paper>
        <Carousel />
        <CardContent>
          <Stack spacing={2}>
            <Details />
            <Buttons />
          </Stack>
        </CardContent>
        <CardActions></CardActions>
      </Paper>
    </Card>
  );
};
