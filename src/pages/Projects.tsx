import { Box, Container, Grid, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import { IProjectCardProps, ProjectCard } from '../components/ProjectCard';

const projectCardProps: IProjectCardProps[] = [
  {
    images: [
      { path: 'https://plus.unsplash.com/premium_photo-1661774686833-f6589517b664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://plus.unsplash.com/premium_photo-1661572949960-dfd749b4806f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    startDate: 'Ago',
    endDate: 'Presente',
    title: 'Projeto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros auctor, tincidunt odio ut, posuere massa. Donec ut mauris eget velit feugiat aliquet. Nulla facilisi. Nullam auctor, odio vel finibus ultricies, lorem massa ultricies nunc, euismod aliquet eros arcu id odio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros auctor, tincidunt odio ut, posuere massa. Donec ut mauris eget velit feugiat aliquet. Nulla facilisi. Nullam auctor, odio vel finibus ultricies, lorem massa ultricies nunc, euismod aliquet eros arcu id odio',
    buttons: [
      { name: 'Ver mais', link: '#' },
      { name: 'Ver mais', link: '#' },
    ]
  },
  {
    images: [
      { path: 'https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://plus.unsplash.com/premium_photo-1696839222697-9a44b7c76d7c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1679746584553-8b122917425c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1699247193226-c9c5a7717013?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1695653421421-28f3816b424a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    startDate: 'Jul',
    endDate: 'Presente',
    title: 'Projeto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros auctor, tincidunt odio ut, posuere massa. Donec ut mauris eget velit feugiat aliquet. Nulla facilisi. Nullam auctor, odio vel finibus ultricies, lorem massa ultricies nunc, euismod aliquet eros arcu id odio',
    buttons: [
      { name: 'Ver mais', link: '#' },
      { name: 'Ver mais', link: '#' },
      { name: 'Ver mais', link: '#' },
      { name: 'Ver mais', link: '#' },
    ]
  },
  {
    images: [
      { path: 'https://images.unsplash.com/photo-1682685797660-3d847763208e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://plus.unsplash.com/premium_photo-1696839222697-9a44b7c76d7c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1679746584553-8b122917425c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1699247193226-c9c5a7717013?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
      { path: 'https://images.unsplash.com/photo-1695653421421-28f3816b424a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    startDate: 'Jul',
    endDate: 'Presente',
    title: 'Projeto 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae eros auctor, tincidunt odio ut, posuere massa. Donec ut mauris eget velit feugiat aliquet. Nulla facilisi. Nullam auctor, odio vel finibus ultricies, lorem massa ultricies nunc, euismod aliquet eros arcu id odio',
    buttons: [
      { name: 'Ver mais', link: '#' },
      { name: 'Ver mais', link: '#' },
      { name: 'Ver mais', link: '#' },
      { name: 'Ver mais', link: '#' },
    ]
  },
];

export const Projects = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Box id="projects" margin={isSmallScreen ? '20% 0' : '3% 0'}>
      <Container>
        <Stack rowGap={4}>
          <Typography variant="h4">Nossas últimas <strong>soluções</strong></Typography>
          <Grid container spacing={6}>
            {projectCardProps.map((props, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <ProjectCard key={index} {...props} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};