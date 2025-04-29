import React from 'react';
import '../Components/Sec-2.css';

export default function Cards() {
    return (
        
        <section className="Sec-2">
        <nav className="cards">
          <div className="left-card">
            <h2>Özel<br/> Lezzetus</h2>
            <p>Position: Absolute Acı Burger</p>
            <button className="button2">SİPARİŞ VER</button>
          </div>
          <div className="right-card">
            <div className="right-top-card">
              <h2>Hackathlon <br/> Burger Menu</h2>
              <button className="button2">SİPARİŞ VER</button>
            </div>
            <div className="right-bottom-card">
              <h2><span style={{color:'red'}}>Çoooook</span> hızlı <br/>npm gibi kurye</h2>
              <button className="button2">SİPARİŞ VER</button>
            </div>
          </div>
        </nav>
      </section>
  
    );
  }