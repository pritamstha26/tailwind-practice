import React from "react";

import Login from "./pages/Login";
import Gallery from "./component/Gallery";
import Title from "./component/Title";
import Card from "./component/Card";
import Navbar from "./component/Navbar";
import routes from "./routes/routes";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="h-screen w-full ">
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route path={route.path} element={route.element} key={index} />
          );
        })}
      </Routes>
    </div>
  );
}
