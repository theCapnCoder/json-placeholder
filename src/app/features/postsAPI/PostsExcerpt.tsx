import TimeAgo from "../posts/TimeAgo";
import ReactionButtons from "../posts/ReactionButtons";
import { Paper, Typography } from "@mui/material";
import { Post } from "../posts/postSlice";
import PostAuthorApi from "./PostAuthorApi";

const PostsExcerpt = ({ post }: { post: Post }) => {
  return (
    <Paper variant="outlined" component={"article"} key={post.id} sx={{ p: 2 }}>
      <Typography variant={"h4"}>{post.title}</Typography>
      <Typography variant="body1">{post.body.substring(0, 100)}</Typography>
      <Typography variant="caption">
        <PostAuthorApi userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </Typography>
    </Paper>
  );
};

export default PostsExcerpt;
