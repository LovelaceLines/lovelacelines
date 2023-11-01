import { Box, Card, CardActions, CardContent, CardMedia, IconButton, MobileStepper, Paper } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Card>
      <Paper>
        <CardMedia>
          <AutoPlaySwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {props.images.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box 
                    component="img"
                    sx={{
                      height: 255,
                      display: 'block',
                      maxWidth: 400,
                      overflow: 'hidden',
                      width: '100%',
                    }}  
                    src={step.path}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper 
            steps={maxSteps}
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
        <CardContent></CardContent>
        <CardActions></CardActions>
      </Paper>
    </Card>
  );
};