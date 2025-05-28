import React from 'react';
import '../Components/Layout.css';

export default function ButtonMenu() {
    return (
        
        <section className="Sec-4">
        <nav className="buttonMenu">
          <div className="buttonMenGro">
            
            <div className="buttonContainer">
              <img src="/assets/iteration-2/icons/1.svg"/>
              <a href="#YENİ!Kore.html">Ramen</a>
            </div>
            
            <div className="buttonContainer" style={{backgroundColor:'#292929'}}>
              <img src="/assets/iteration-2/icons/2.svg"/>
              <a  href="#Pizza.html">Pizza</a>
            </div>
            
            <div className="buttonContainer">
              <img src="/assets/iteration-2/icons/3.svg"/>
              <a href="#Burger.html">Burger</a>
            </div>
            <div className="buttonContainer">
              <img src="/assets/iteration-2/icons/4.svg"/>
              <a href="#Kızartmalar.html">French fries</a>
            </div>
            
            <div className="buttonContainer">
              <img src="/assets/iteration-2/icons/5.svg"/>
              <a href="#Fast Food.html">Fast Food</a>   
            </div>
            
            <div className="buttonContainer">
              <img src="/assets/iteration-2/icons/6.svg"/>
              <a href="#Gazlıİçecek.html">Soft Drinks</a>
            </div>
             
          </div>
        </nav>
  
      </section>
  
    );
  }