import { Box, Container, Divider, Grow, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/elvin-mark/elvin-mark.github.io/main/data/posts.json"
    )
      .then((response) => response.json())
      .then((res) => {
        setData(res.posts);
      });
  }, []);
  return (
    <div>
      <Stack spacing={2}>
        {data.map((elem) => (
          <Post {...elem} key={elem.id}></Post>
        ))}
      </Stack>
    </div>
  );
}

export default Posts;
