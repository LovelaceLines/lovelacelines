import Link from 'next/link';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import { colors } from '@/_theme';
import { Summary } from '@/_types';

interface ContentSummaryProps {
  summary: Summary[],
  sliceTitle?: number,
  sx?: SxProps<Theme> | undefined
}

export const ContentSummary = ({ summary, sliceTitle = 30, sx = undefined }: ContentSummaryProps) => {
  return (
    <Box display={summary ? 'flex' : 'none'} flexDirection='column' sx={sx}>
      <Typography variant='subtitle1' gutterBottom>Sumário:</Typography>
      {summary && summary.map((item, id) => (
        <Link key={id} href={`#${item.id}`} style={{ color: `${colors.primary}` }}>
          <Typography gutterBottom noWrap>
            {item.title.slice(0, sliceTitle) + (item.title.length > sliceTitle ? '...' : '')}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};