//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./store/UserContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import CharacterDetail from "./component/CharacterDetail";
import PlanetDetail from "./component/PlanetDetail";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Signup from "./component/Signup"; // Importa el componente Signup

//render your react application
ReactDOM.render(
  <UserProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail_character/:characterId" element={<CharacterDetail />} />
        <Route path="/detail_planet/:planetId" element={<PlanetDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Agrega la ruta para Signup */}
      </Routes>
      <Footer />
    </Router>
  </UserProvider>,
  document.querySelector('#app')
);
