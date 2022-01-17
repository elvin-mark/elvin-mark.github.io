import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import MyTabs from "./components/MyTabs";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Posts from "./components/Posts";
import Flower from "./components/Flower";
import Playground from "./components/Playground";
import Pokedex from "./components/Pokedex";

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
            <Route path="/flower" element={<Flower />}></Route>
            <Route path="/pokedex" element={<Pokedex />}></Route>
            <Route
              path="/playground"
              element={<Playground></Playground>}
            ></Route>
          </Routes>
        </Box>
      </MemoryRouter>
    </div>
  );
}

export default App;
