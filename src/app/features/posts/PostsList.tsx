import { useSelector } from "react-redux/es/hooks/useSelector";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { selectAllPosts } from "./postSlice";
import AddPostForm from "./AddPostForm";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderPosts = posts.map((post) => (
    <Paper variant="outlined" component={"article"} key={post.id} sx={{ p: 2 }}>
      <Typography variant={"h4"}>{post.title}</Typography>
      <Typography variant="body1">{post.content.substring(0, 100)}</Typography>
    </Paper>
  ));

  return (
    <Box>
      <Typography variant={"h3"} my={2}>
        PostsList
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: "300px" }}>
        {renderPosts}
      </Stack>

      <AddPostForm />
    </Box>
  );
};

export default PostsList;
