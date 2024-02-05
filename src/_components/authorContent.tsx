'use client';

import { Box, Container, useMediaQuery } from "@mui/material";
import React from "react";

import { ContentStyles } from "@/_styles";

interface AuthorContentProps {
  content: string;
}

export const AuthorContent = ({ content }: AuthorContentProps) => {
  const smDown = useMediaQuery('(max-width:600px)');

  return (
    <Container maxWidth='md' disableGutters={smDown}>
      <Box
        sx={ContentStyles}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};
