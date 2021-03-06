import React, { useState, useEffect } from "react";
import { List } from "@mui/material";
import PublicationItem from "./PublicationItem";

function Publications() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/elvin-mark/elvin-mark.github.io/main/data/publications.json"
    )
      .then((response) => response.json())
      .then((res) => {
        setData(res.publications);
      });
  }, []);
  return (
    <div>
      <List>
        {data.map((elem) => (
          <PublicationItem {...elem} key={elem.id}></PublicationItem>
        ))}
      </List>
    </div>
  );
}

export default Publications;
