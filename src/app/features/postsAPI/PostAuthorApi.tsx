import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { selectAllApiUsers } from "../users/usersApiSlice";

const PostAuthorApi = ({ userId }: { userId: number | undefined }) => {
  const users = useSelector(selectAllApiUsers);

  const author = users.find((user) => user.id === userId);
  return (
    <Typography variant="caption" component={"span"}>
      by {author ? author.name : "Unknown author"}
    </Typography>
  );
};

export default PostAuthorApi;