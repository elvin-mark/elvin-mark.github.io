import { Link, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

function PublicationItem({ title, journal, author, year, URL }) {
  return (
    <>
      <ListItem>
        <ListItemText>
          {author} ({year}). {title}.{" "}
          <span style={{ fontStyle: "italic" }}>{journal}</span>.{" "}
          <Link href={URL}>{URL}</Link>
        </ListItemText>
      </ListItem>
    </>
  );
}

export default PublicationItem;
