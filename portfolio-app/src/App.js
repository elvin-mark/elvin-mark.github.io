import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import MyTabs from "./components/MyTabs";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Posts from "./components/Posts";
import Playground from "./components/Playground";
import Publications from "./components/Publications";

import Flower from "./components/Flower/Flower";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  return (
    <div className="App">
      <MemoryRouter initialEntries={["/"]} initialIndex={0}>
        <Box sx={{ width: "100%" }}>
          <MyTabs />
          <Routes>
            <Route path="/" element={<AboutMe />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route
              path="/playground"
              element={<Playground></Playground>}
            ></Route>
            <Route
              path="/publications"
              element={<Publications></Publications>}
            ></Route>
            <Route path="/flower" element={<Flower />}></Route>
            <Route path="/pokedex" element={<Pokedex />}></Route>
          </Routes>
        </Box>
      </MemoryRouter>
    </div>
  );
}

export default App;
