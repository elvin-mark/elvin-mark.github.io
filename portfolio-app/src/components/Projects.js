import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "./MyStyle.css";
import Project from "./Project";

function Projects() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/elvin-mark/elvin-mark.github.io/main/data/projects.json"
    )
      .then((response) => response.json())
      .then((res) => {
        setData(res.projects);
      })
      .catch((err) => {
        console.log("Error!");
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          columnGap: 3,
          rowGap: 1,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {data.map((elem) => (
          <Project {...elem} key={elem.id}></Project>
        ))}
      </Box>
    </div>
  );
}

export default Projects;
