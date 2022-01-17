import { Tab, Tabs } from "@mui/material";
import React from "react";
import { Link, matchPath, useLocation } from "react-router-dom";

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }
  return { pattern: { path: "/playground" } };
}

function MyTabs() {
  const routeMatch = useRouteMatch(["/", "/projects", "/posts", "/playground"]);
  const currentTab = routeMatch?.pattern?.path;
  return (
    <div>
      <Tabs value={currentTab}>
        <Tab label="About Me" value="/" to="/" component={Link}></Tab>
        <Tab
          label="Projects"
          value="/projects"
          to="/projects"
          component={Link}
        ></Tab>
        <Tab label="Posts" value="/posts" to="/posts" component={Link}></Tab>
        <Tab
          label="Playground"
          value="/playground"
          to="/playground"
          component={Link}
        ></Tab>
      </Tabs>
    </div>
  );
}

export default MyTabs;
