import { Box, Container, Grid, Link, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import Axios from 'axios';
import { useEffect, useState } from 'react';

// https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/

interface FeedInstagramProps {
  id: string;
  caption: string | null; // O texto na legenda da mídia. Não retornável para mídias em álbuns.
  is_shared_to_feed: boolean | null; // Somente para Reels. true indica que o reel pode aparecer nas abas Feed e Reels. false indica que o reel pode aparecer apenas na aba Reels.
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'; // O tipo de mídia. Pode ser IMAGE, VIDEO ou CAROUSEL_ALBUM.
  media_url: string; // O URL da mídia.
  permalink: string; // A URL permanente da mídia. Será omitida se a mídia contiver material protegido por direitos autorais ou tiver sido sinalizada como violação desses direitos.
  username: string; // O nome de usuário do proprietário da mídia.
  children: { // Obtenha a lista de mídias do álbum. Disponível somente em mídias de CAROUSEL_ALBUM.
    data: FeedInstagramProps[];
  };
}

const reelsStyles = {
  width: 'auto',
  height: 'auto',
  aspectRatio: '9/16',
};


export const FeedInstagram = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [feed, setFeed] = useState<FeedInstagramProps[]>([]);

  const getFeed = async () => { 
    const token = process.env.REACT_APP_INSTAGRAM_TOKEN;
    const fields = 'id,caption,is_shared_to_feed,media_type,media_url,permalink,username,children';
    const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}`;

    try {
      const response = await Axios.get(url);
      setFeed(response.data.data);
    } catch {}
  };

  useEffect(() => {
    getFeed();
    console.log(feed);
  }, []);

  const Reels = (post: FeedInstagramProps) => (
    <Link href={post.permalink} target='_blank' rel='noreferrer'>
      <video src={post.media_url} controls autoPlay muted loop width='100%' />
    </Link>
  );

  const PublicationReels = (post: FeedInstagramProps[]) => (
    <Grid container spacing={2}>
      {post.filter(p => p.media_type === 'VIDEO' && p.is_shared_to_feed === true)
        .slice(0, 4)
        .map(p => (
          <Grid item xs={3} sx={{aspectRatio:'9/16'}} key={p.id}>
            {Reels(p)}
          </Grid>
        ))
      }
    </Grid>
  );

  const Image = (post: FeedInstagramProps) => (
    <Box height='100%'>
      <Link href={post.permalink} target='_blank' rel='noreferrer'>
        <img src={post.media_url} 
          style={{ width:'100%', height:'100%', aspectRatio:'1/1', objectFit:'cover' }} 
          alt={post.caption ?? ''} />
      </Link>
    </Box>
  );

  const PublicationImage = (post: FeedInstagramProps[]) => (
    <Grid container spacing={0.5}>
      {post.filter(p => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM')
        .slice(0, 9)
        .map(p => (
          <Grid item xs={4} key={p.id}>
            {Image(p)}
          </Grid>
        ))
      }
    </Grid>
  );

  return (
    <>
      {feed.length === 0 ? null : (
        <Container maxWidth='md' disableGutters={isSmallScreen}>
          <Stack spacing={4}>
            <Typography variant="h4">Também estamos presente no <Link underline='hover' href='https://www.instagram.com/lovelacelines/' target='_blank' rel='noreferrer'>Instagram</Link></Typography>
            <Box>
              {!isSmallScreen && PublicationReels(feed)}
              {PublicationImage(feed)}
            </Box>
          </Stack>
        </Container>
      )}
    </>
  );
};