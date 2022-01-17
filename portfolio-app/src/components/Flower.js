import React, { useState } from "react";
import { Container, Typography, Grid, Stack, Button } from "@mui/material";
import WebCam from "react-webcam";
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from "recharts";
import axios from "axios";

function Flower() {
  const [pred, setPred] = useState([]);
  const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: "environment",
  };

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imgSrc = webcamRef.current.getScreenshot();
    axios({
      method: "post",
      baseURL: "https://model-recog-app.herokuapp.com/",
      url: "/flower",
      data: { img: imgSrc },
    })
      .then((response) => setPred(response.data.predictions))
      .catch((err) => {
        console.log("Error");
        console.log(err);
      });
  }, [webcamRef]);
  return (
    <div>
      <Container style={{ backgroundColor: "#222222" }}>
        <Typography style={{ fontSize: "50px", color: "white" }}>
          Flower Search
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack justifyContent={"center"}>
              <WebCam
                style={{ width: "100%" }}
                audio={false}
                height={400}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={"100%"}
                videoConstraints={videoConstraints}
              ></WebCam>
              <Button onClick={capture}>Capture</Button>
            </Stack>
          </Grid>
          <Grid xs={6}>
            <BarChart
              data={pred}
              width={500}
              height={500}
              layout="vertical"
              margin={{ left: 80 }}
            >
              <Bar dataKey="prob" fill="#aa2200"></Bar>
              <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
              <XAxis type="number"></XAxis>
              <YAxis dataKey="name" type="category"></YAxis>
              <Legend></Legend>
            </BarChart>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Flower;
