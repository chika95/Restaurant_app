import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./Components/searchBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import menu from "./Components/Data";
import Menu from "./Components/Menu";

function App() {
  return (
    <div>
      <h1 className="restaurant-Name">Osuags Kitchen</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
