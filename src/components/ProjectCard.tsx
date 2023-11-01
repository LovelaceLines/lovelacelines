import { Box, Card, CardActions, CardContent, CardMedia, Paper } from '@mui/material';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface ProjectCardProps {
  images: { path: string }[];
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  buttons: { name: string; link: string }[];
}

export const ProjectCard = (props: ProjectCardProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = 1; // images.length

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
        </CardMedia>
        <CardContent></CardContent>
        <CardActions></CardActions>
      </Paper>
    </Card>
  );
};