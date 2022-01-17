import {
  Container,
  Stack,
  Box,
  CardContent,
  CardActions,
  Card,
  CardMedia,
} from "@mui/material";
import React from "react";
import "./MyStyle.css";
import { Link } from "react-router-dom";

function Playground() {
  return (
    <div>
      <Container>
        <Box>
          <Stack>
            <Card className="MyProject">
              <CardMedia
                component="img"
                image={
                  "https://raw.githubusercontent.com/elvin-mark/elvin-mark.github.io/main/images/project_flower_search.png"
                }
                alt="flower ml"
                height="200"
              ></CardMedia>
              <CardContent>Flower ML</CardContent>
              <CardActions>
                <Link to="/flower" value="/playground">
                  Play with it!
                </Link>
              </CardActions>
            </Card>
            <Card className="MyProject">
              <CardMedia
                component="img"
                image={
                  "https://raw.githubusercontent.com/elvin-mark/elvin-mark.github.io/main/images/project_pokedex_ml.png"
                }
                alt="pokedex ml"
                height="200"
              ></CardMedia>
              <CardContent>Pokedex ML</CardContent>
              <CardActions>
                <Link to="/pokedex" value="/playground">
                  Play with it!
                </Link>
              </CardActions>
            </Card>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default Playground;
