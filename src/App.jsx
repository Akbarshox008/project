import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import logo from "./Components/HomePage/Icons/logo.png";

function App() {
  return (
    <div className="home">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="list">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#guru">Guru</a>
            <a href="#sisva">Siswa</a>
            <a href="#pendaftaran">Pendaf</a>
            <a href="#lainya">Lainya</a>
            <a href="#kontak">Kontak</a>
          </div>
        </nav>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
