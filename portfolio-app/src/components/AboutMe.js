import { Box, Container, Divider, ListItem, Stack, Table } from "@mui/material";
import React from "react";
import "./MyStyle.css";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faYoutube, faFacebook, faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"

function AboutMe() {
  return (
    <div className="MyBackground">
      <Container style={{ padding: "10px" }}>
        <Box className="MyBox">
          <h1 className="MyTitle">Hello!</h1>
          <p className="MyText">
            My name is Elvin! Nice to meet you! 👋. I am interested in anything related with Machine Learning and Deep Learning 🧠💻!
            Though, I have a particular interest on Comptuer Vision 👀. I really find fascinating how Deep Neural Networks can recognize 
            different kind of images, detect objects within an image with astonishing accuracy or even generate images that can trick
            anybody into beliving that is a real thing. I think there is still a lot to research about in this field and I would like to be 
            part of that evolution.
          </p>
        </Box>
        <Divider></Divider>
        <Box className="MyBox">
            <h3>Follow Me!</h3>
            <a href="https://www.youtube.com/channel/UCB8s1H54__I57r-3aFLek-Q" className="youtube social" style={{padding:2}}><FontAwesomeIcon icon={faYoutube} size="2x"></FontAwesomeIcon></a>
            <a href="https://twitter.com/ElvinMark3" className="twitter social" style={{padding:2}}><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a>
            <a href="https://www.instagram.com/31v1nm4rk/" className="instagram social" style={{padding:2}}><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a>
            <a href="https://www.linkedin.com/in/elvin-mark-munoz-vega-572a1b1ba/" className="linkedin social" style={{padding:4}}><FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a>
        </Box>
      </Container>
    </div>
  );
}

export default AboutMe;
