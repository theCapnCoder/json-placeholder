import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import { RootState } from "../../store";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("");

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount("");
    dispatch(reset());
  };

  return (
    <Box component={"section"} sx={{ width: "100%" }}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        spacing={4}
        sx={{ width: "100%" }}
      >
        <Typography variant="h3">Counter</Typography>

        <Typography variant={"h1"}>{count}</Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => dispatch(decrement())}>
            -
          </Button>
          <Button variant="contained" onClick={() => dispatch(increment())}>
            +
          </Button>
        </Stack>

        <TextField
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        ></TextField>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={() => dispatch(incrementByAmount(addValue))}
          >
            Increment by Amount
          </Button>
          <Button variant="contained" onClick={() => resetAll()}>
            Reset
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Counter;
