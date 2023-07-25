import { Typography } from "@mui/material";
import Counter from "./app/features/counter/Counter";
import PostsList from "./app/features/posts/PostsList";
import PostsListApi from "./app/features/postsAPI/PostListApi";

function App() {
  return (
    <div>
      <Typography>JSON placeholder</Typography>
      <PostsListApi />
    </div>
  );
}

export default App;
