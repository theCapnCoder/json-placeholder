import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Counter from "../app/features/counter/Counter";
import PostsList from "../app/features/posts/PostsList";
import PostsListApi from "../app/features/postsAPI/PostListApi";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "counter",
          element: <Counter />,
        },
        {
          path: "posts",
          element: <PostsList />,
        },
        {
          path: "postsApi",
          element: <PostsListApi />,
        },
        {
          path: "*",
          element: <h1>Not found</h1>,
        },
      ],
    },
  ],
  { basename: "/energy-rent" }
);

export default router;
