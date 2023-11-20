'use client'

import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, IconButton, MobileStepper, Paper, Stack, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState } from 'react';
import Image from 'next/image';

export interface IProjectCardProps {
  imagesPath: string[];
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  buttons: { name: string; link: string }[];
}

const ImageStyle = {
  width: '100%', 
  height: '100%',
  aspectRatio: '16/9'
};

export const ProjectCard = (props: IProjectCardProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = props.imagesPath.length;

  const handleNext = () => {
    setActiveStep((step) => step === maxSteps - 1 ? step = 0 : step + 1);
  };

  const handleBack = () => {
    setActiveStep((step) => step === 0 ? step = maxSteps - 1 : step - 1);
  };

  const Carousel = () => (
    <CardMedia sx={{ position: 'relative' }}>
      <Image src={props.imagesPath[activeStep]} alt={`Step ${activeStep}`} width={1024} height={768} style={ImageStyle} />
      <MobileStepper variant='dots' steps={maxSteps} position="static" activeStep={activeStep}
        nextButton={
          <IconButton size="small" onClick={handleNext}>
            <KeyboardArrowRightIcon />
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack}>
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
    <Stack direction='row' spacing={2} flexWrap='wrap' useFlexGap>
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