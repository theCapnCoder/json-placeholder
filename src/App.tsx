import { Box, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Menu } from "./components/menu";

function App() {
  return (
    <Box>
      <Typography
        component={"h1"}
        variant="h3"
        sx={{ textAlign: "center", mb: 4 }}
      >
        JSON placeholder
      </Typography>
      <Stack direction={"row"} spacing={2}>
        <Menu />
        <Outlet />
      </Stack>
    </Box>
  );
}

export default App;
