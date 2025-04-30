import React from 'react';
import logo from '../assets/iteration-1/logo.svg';
import '../Components/Layout.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
  
  return (
    <header>
      <img src={logo} alt="logo" />
      <h2 className="firsat">fırsatı kaçırma</h2>
      <h1 className="kod"> KOD ACIKTIRIR <br /> PİZZA, DOYURUR</h1>
      <Link to="/Siparis">
      <button type="button">ACIKTIM</button>
      </Link>
    </header>
  );
}