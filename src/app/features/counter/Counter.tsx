import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";
import { RootState } from "../../store";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("0");

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount("0");
    dispatch(reset());
  };

  return (
    <Box component={"section"}>
      <div>Counter</div>
      <Typography variant={"h1"}>{count}</Typography>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => dispatch(increment())}>
          -
        </Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          +
        </Button>
        <TextField
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        ></TextField>
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
    </Box>
  );
};

export default Counter;
