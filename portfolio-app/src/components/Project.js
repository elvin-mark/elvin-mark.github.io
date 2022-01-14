import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
} from "@mui/material";
import React from "react";
import "./MyStyle.css";
function Project({ img, title, summary, link }) {
  return (
    <div>
      <Card className="MyProject">
        <CardMedia
          component="img"
          image={img}
          alt="image project"
          height="140"
        ></CardMedia>
        <CardContent>
          <h1>{title}</h1>
          <p>{summary}</p>
        </CardContent>
        <CardActions>
          <Link href={link}>More Info</Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default Project;
