import { Box, Typography } from '@mui/material';
import { IProjectCardProps, ProjectCard } from '../components/ProjectCard';

const projectCardProps: IProjectCardProps[] = [
  {
    images: [
      { path: '/images/1.jpg' },
      { path: '/images/2.jpg' },
      { path: '/images/3.jpg' },
      { path: '/images/4.jpg' },
      { path: '/images/5.jpg' },
      { path: '/images/6.jpg' },
    ],
    startDate: 'Ago',
    endDate: 'Presente',
    title: 'Projeto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros auctor, tincidunt odio ut, posuere massa. Donec ut mauris eget velit feugiat aliquet. Nulla facilisi. Nullam auctor, odio vel finibus ultricies, lorem massa ultricies nunc, euismod aliquet eros arcu id odio',
    buttons: [
      { name: 'Ver mais', link: '#' },
      { name: 'Ver mais', link: '#' },
    ]
  },
];

export const Projects = () => {
  return (
    <Box>
      <Typography variant="h1">Nossas últimas <strong>soluções</strong></Typography>
      <Box>
        {projectCardProps.map((props, index) => (
          <ProjectCard key={index} {...props} />
        ))}
      </Box>
    </Box>
  );
};