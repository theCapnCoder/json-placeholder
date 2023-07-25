import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import AddPostForm from "../posts/AddPostForm";
import {
  fetchPosts,
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "./postSlice";
import { AppDispatch } from "../../store";
import PostsExcerpt from "./PostsExcerpt";

const PostsListApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  let content;
  if (postsStatus === "loading") {
    content = (
      <Typography variant={"h3"} my={2}>
        Loading...
      </Typography>
    );
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    console.log(orderedPosts);
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = (
      <Typography variant={"h3"} my={2}>
        {postsError}
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant={"h3"} my={2}>
        PostsList
      </Typography>
      <Stack spacing={2}>{content}</Stack>

      <AddPostForm />
    </Box>
  );
};

export default PostsListApi;
