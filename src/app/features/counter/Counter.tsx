import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { RootState } from "../../store";
import { Box, Button, Stack, Typography } from "@mui/material";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.counter);
  const dispatch = useDispatch();

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
        <Button variant="contained" onClick={() => dispatch(incrementByAmount(5))}>
          Increment by Amount
        </Button>
      </Stack>
    </Box>
  );
};

export default Counter;
