import { Box, Container, Divider, ListItem, Stack, Table } from "@mui/material";
import React from "react";
import "./MyStyle.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="MyBackground">
      <Container style={{ padding: "10px" }}>
        <Box className="MyBox">
          <h1 className="MyTitle">Hello!</h1>
          <p className="MyText">
            I am Elvin Mark Munoz Vega, but please just call me Elvin 😂. I am
            interested in anything related with Machine Learning 🧠💻, specially
            in Deep Learning. Though, I have a particular interest on Comptuer
            Vision 👀. I really find fascinating how Deep Neural Networks can
            recognize different kind of images , detect objects within an image
            with astonishing accuracy or even generate images that can trick
            anybody into beliving that is a real thing. I think there is still a
            lot to research about in this field and I would like to be part of
            that evolution.
          </p>
        </Box>
        <Divider></Divider>
        <Box className="MyBox">
          <h1 className="MyTitle">Contact </h1>
          <p className="MyText">
            <Stack>
              <Box></Box>
            </Stack>
          </p>
        </Box>
      </Container>
    </div>
  );
}

export default AboutMe;
