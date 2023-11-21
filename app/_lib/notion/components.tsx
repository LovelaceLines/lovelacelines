import { Paper, Typography } from "@mui/material";

export const Blockquote: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Paper>
      <Typography variant="body1">{children}</Typography>
    </Paper>
  );
};

export const Code: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Paper>
      <Typography variant="body1">{children}</Typography>
    </Paper>
  );
};