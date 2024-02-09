import { Box, Container } from '@mui/material';

import { ContentStyles } from '@/_styles';

export const PostContent = ({ content }: { content: string }) => {
  return (
    <Container maxWidth='sm' disableGutters>
      <Box
        sx={ContentStyles}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};
