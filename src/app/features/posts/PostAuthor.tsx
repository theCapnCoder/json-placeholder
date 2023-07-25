import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { Typography } from "@mui/material";

const PostAuthor = ({ userId }: { userId: number | undefined }) => {
  const users = useSelector(selectAllUsers);
  console.log(userId);

  const author = users.find((user) => user.id === userId);
  return (
    <Typography variant="caption" component={"span"}>
      by {author ? author.name : "Unknown author"}
    </Typography>
  );
};

export default PostAuthor;
