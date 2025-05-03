import React from 'react';
import '../Components/Layout.css';

export default function NavMenu() {
    return (
      <section className="Sec-1">
        <nav className="nav-gour">
          <div className="nav-group">
            
            <div className="nav-items">
              <img src="../src/assets/iteration-2/icons/1.svg"/>
              <a href="#YENİ!Kore.html">YENİ! Kore</a>
            </div>
            
            <div className="nav-items">
              <img src="../src/assets/iteration-2/icons/2.svg"/>
              <a href="#Pizza.html">Pizza</a>
            </div>
            
            <div className="nav-items">
              <img src="../src/assets/iteration-2/icons/3.svg"/>
              <a href="#Burger.html">Burger</a>
            </div>
            <div className="nav-items">
              <img src="../src/assets/iteration-2/icons/4.svg"/>
              <a href="#Kızartmalar.html">Kızartmalar</a>
            </div>
            
            <div className="nav-items">
              <img src="../src/assets/iteration-2/icons/5.svg"/>
              <a href="#Fast Food.html">Fast Food</a>   
            </div>
            
            <div className="nav-items">
              <img src="../src/assets/iteration-2/icons/6.svg"/>
              <a href="#Gazlıİçecek.html">Gazlı İçecek</a>
            </div>
             
          </div>
        </nav>
      </section>
  
    );
  }