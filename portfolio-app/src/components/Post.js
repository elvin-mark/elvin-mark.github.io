import { Box, Divider, Grow } from "@mui/material";
import React from "react";
import "./MyStyle.css";

function Post({ title, content }) {
  return (
    <div>
      <Box className="MyPost">
        <h1>{title}</h1>
        <p>{content}</p>
      </Box>
    </div>
  );
}

export default Post;
