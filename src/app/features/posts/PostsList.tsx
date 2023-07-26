import { useSelector } from "react-redux";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { selectAllPosts } from "./postSlice";
import AddPostForm from "./AddPostForm";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <Paper variant="outlined" component={"article"} key={post.id} sx={{ p: 2 }}>
      <Typography variant={"h4"}>{post.title}</Typography>
      <Typography variant="body1">{post.content.substring(0, 10)}</Typography>
      <Typography variant="caption">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </Typography>
    </Paper>
  ));

  return (
    <Box>
      <Typography variant={"h3"} my={2}>
        Posts from local list
      </Typography>
      <Stack spacing={2} sx={{ maxWidth: "300px" }}>
        {renderPosts}
      </Stack>

      <AddPostForm />
    </Box>
  );
};

export default PostsList;
