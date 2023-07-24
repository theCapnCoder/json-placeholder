import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSavePostClicked = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title: title.trim(),
          content: content.trim(),
        })
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <Box>
      <Typography variant="h3">AddPost</Typography>
      <form onClick={onSavePostClicked}>
        <Stack spacing={2} sx={{ maxWidth: "300px" }}>
          <TextField type="text" value={title} onChange={onTitleChange} />
          <TextField type="text" value={content} onChange={onContentChange} />
          <Button variant="contained" type="submit">
            Save Post
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddPostForm;
