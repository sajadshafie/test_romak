import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import List from "./Screens/List";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
