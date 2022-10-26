import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovies from "./SingleMovies";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovies />} />
    </Routes>
  );
};

export default App;