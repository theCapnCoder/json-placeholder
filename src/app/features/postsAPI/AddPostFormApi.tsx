import { Box, Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import { selectAllApiUsers } from "../users/usersApiSlice";

const AddPostFormApi = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllApiUsers);

  const dispatch = useDispatch();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onSavePostClicked = (e: React.FormEvent) => {
    e.preventDefault();

    if (title && content) {
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const usersOptions = users.map((user) => (
    <MenuItem key={user.id} value={user.id}>
      {user.name}
    </MenuItem>
  ));

  const canSave = [title, content, userId].every(Boolean);

  return (
    <Box>
      <Typography variant="h3">AddPost</Typography>
      <form onSubmit={onSavePostClicked}>
        <Stack spacing={2} sx={{ maxWidth: "300px" }}>
          <TextField type="text" value={title} onChange={onTitleChange} />
          <TextField select value={userId} onChange={onAuthorChange}>{usersOptions}</TextField>
          <TextField type="text" value={content} onChange={onContentChange} />
          <Button variant="contained" type="submit" disabled={!canSave}>
            Save Post
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddPostFormApi;
