import React from "react";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Intro from "../pages/Intro";
import MDB from "../pages/MDB";
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
  },
];

export default routes;
