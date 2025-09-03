import React from "react";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Intro from "../pages/Intro";
import MDB from "../pages/MDB";
import Movie from "../pages/Movie";
import Youtube from "../pages/Youtube";
const routes = [
  {
    path: "/*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/intro",
    element: <Intro />,
  },
  {
    path: "/movies",
    element: <MDB />,
  },  {
    path: "/single-movie",
    element: <Movie />,
  }, {
    path: "/y-course",
    element: <Youtube />,
  },
];

export default routes;
