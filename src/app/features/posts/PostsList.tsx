import { useSelector } from "react-redux/es/hooks/useSelector";
import { Box, Typography } from "@mui/material";
import { selectAllPosts } from "./postSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <Box component={"article"} key={post.id}>
      <Typography variant={"h3"}>{post.title}</Typography>
      <Typography variant="body1">{post.content.substring(0, 100)}</Typography>
    </Box>
  ));

  return (
    <Box>
      <Typography>PostsList</Typography>
      {renderPosts}
    </Box>
  );
};

export default PostsList;
