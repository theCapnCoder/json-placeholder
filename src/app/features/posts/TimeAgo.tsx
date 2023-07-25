import { parseISO, formatDistanceToNow } from "date-fns";
import { Typography } from "@mui/material";

const TimeAgo = ({ timestamp }: { timestamp: string | undefined }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <Typography component={"span"} title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </Typography>
  );
};

export default TimeAgo;
