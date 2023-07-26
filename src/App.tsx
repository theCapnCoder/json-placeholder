import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box>
      <Typography>JSON placeholder</Typography>
      <Outlet />
    </Box>
  );
}

export default App;
