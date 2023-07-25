import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Post, Reactions, reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕️",
};

const ReactionButtons = ({ post }: { post: Post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <Button
        key={name}
        onClick={() =>
          dispatch(
            reactionAdded({
              postId: post.id,
              reaction: name as keyof Reactions,
            })
          )
        }
      >
        {emoji} {post.reactions[name as keyof typeof reactionEmoji]}
      </Button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
