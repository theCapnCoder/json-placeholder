import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import PostAuthor from "../posts/PostAuthor";
import TimeAgo from "../posts/TimeAgo";
import ReactionButtons from "../posts/ReactionButtons";
import AddPostForm from "../posts/AddPostForm";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postSlice";
import { AppDispatch } from "../../store";

const PostsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <Paper variant="outlined" component={"article"} key={post.id} sx={{ p: 2 }}>
      <Typography variant={"h4"}>{post.title}</Typography>
      <Typography variant="body1">{post.content.substring(0, 100)}</Typography>
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
