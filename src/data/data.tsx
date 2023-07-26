import { Countertops, MarkAsUnread, MarkunreadMailbox } from "@mui/icons-material";

type ListItem = {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
};

type Menu = {
  id: number;
  title: string;
  listItems: ListItem[];
};

export const menu: Menu[] = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Counter",
        url: "/counter",
        icon: <Countertops />,
      },
      {
        id: 2,
        title: "Posts",
        url: "/posts",
        icon: <MarkAsUnread />,
      },
      {
        id: 3,
        title: "PostsApi",
        url: "/postsApi",
        icon: <MarkunreadMailbox />,
      },
    ],
  },
];