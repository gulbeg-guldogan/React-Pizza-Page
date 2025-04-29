import React from 'react';
import logo from '../assets/iteration-1/logo.svg';
import '../Components/Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <h2 className="firsat">fırsatı kaçırma</h2>
      <h1 className="kod"> KOD ACIKTIRIR <br /> PİZZA, DOYURUR</h1>
      <button type="button">ACIKTIM</button>
    </header>
  );
}