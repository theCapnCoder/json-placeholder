import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  return (
    <Box>
      <Typography variant="h3">AddPost</Typography>
      <form>
        <Stack spacing={2} sx={{ maxWidth: "300px" }}>
          <TextField
            type="text"
            value={title}
            onChange={onTitleChange}
          />
          <TextField
            type="text"
            value={content}
            onChange={onContentChange}
          />
          <Button variant="contained" type="submit">
            Add Post
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default AddPost;
