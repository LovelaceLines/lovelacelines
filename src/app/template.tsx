import { Box } from "@mui/material"
import { MenuAppBar } from "../_components/menuAppBar";

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      <MenuAppBar />
      {children}
    </Box>
  );
}