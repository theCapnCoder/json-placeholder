import {
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllApiUsers } from "../users/usersApiSlice";
import { addNewPost } from "./postSlice";
import { AppDispatch } from "../../store";

const AddPostFormApi = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState<
    "idle" | "pending" | "succeeded" | "failed"
  >("idle");

  const users = useSelector(selectAllApiUsers);

  const dispatch = useDispatch<AppDispatch>();

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const onSavePostClicked = (e: React.FormEvent) => {
    e.preventDefault();

    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (err) {
        console.log("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const usersOptions = users.map((user) => (
    <MenuItem key={user.id} value={user.id}>
      {user.name}
    </MenuItem>
  ));

  return (
    <Box mb={4}>
      <Typography variant="h5" mb={1}>
        AddPost
      </Typography>
      <form onSubmit={onSavePostClicked}>
        <Stack spacing={2} sx={{ maxWidth: "300px" }}>
          <TextField type="text" value={title} onChange={onTitleChange} />
          <TextField select value={userId} onChange={onAuthorChange}>
            {usersOptions}
          </TextField>
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
