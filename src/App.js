import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import * as React from 'react';
import History from "./pages/History";
import About from "./pages/About";
import Pokedex from "./pages/Pokedex";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/battle" element={<HomePage />} />
        <Route path="/history" element={<History />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
