import { Box, Button, Stack, Typography } from "@mui/material";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { Menu } from "./components/menu";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/counter");
  }, [navigate]);

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
