'use client'

import { IFeed } from '@/api/instagram-feed/route';
import { Box, Container, Grid, Link, Stack, Theme, Typography, useMediaQuery } from '@mui/material';
import Axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const reelsStyles = {
  width: 'auto',
  height: 'auto',
  aspectRatio: '9/16',
};

export const InstagramFeed = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [feed, setFeed] = useState<IFeed[]>([]);

  const getFeed = async () => { 
    try {
      const response = await Axios.get<IFeed[]>('/api/instagram-feed');
      setFeed(response.data);
    } catch {}
  };

  useEffect(() => {
    getFeed();
    console.log(feed);
  }, [feed]);

  const Reels = (post: IFeed) => (
    <Link href={post.permalink} target='_blank' rel='noreferrer'>
      <video src={post.media_url} controls autoPlay muted loop width='100%' />
    </Link>
  );

  const PublicationReels = (post: IFeed[]) => (
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

  const FeedImage = (post: IFeed) => (
    <Box height='100%'>
      <Link href={post.permalink} target='_blank' rel='noreferrer'>
        <Image src={post.media_url} width={1080} height={1080}
          style={{ width:'100%', height:'100%', aspectRatio:'1/1', objectFit:'cover' }} 
          alt={post.caption ?? ''} />
      </Link>
    </Box>
  );

  const PublicationFeedImage = (post: IFeed[]) => (
    <Grid container spacing={0.5}>
      {post.filter(p => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM')
        .slice(0, 9)
        .map(p => (
          <Grid item xs={4} key={p.id}>
            {FeedImage(p)}
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
              {PublicationFeedImage(feed)}
            </Box>
          </Stack>
        </Container>
      )}
    </>
  );
};