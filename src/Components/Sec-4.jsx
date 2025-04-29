import React from 'react';
import '../Components/Sec-4.css';

export default function ButtonMenu() {
    return (
        
        <section class="Sec-4">
        <nav class="buttonMenu">
          <div class="buttonMenGro">
            
            <div class="buttonContainer">
              <img src="../src/assets/iteration-2/icons/1.svg"/>
              <a href="#YENİ!Kore.html">Ramen</a>
            </div>
            
            <div class="buttonContainer" style={{backgroundColor:'#292929'}}>
              <img src="../src/assets/iteration-2/icons/2.svg"/>
              <a  href="#Pizza.html">Pizza</a>
            </div>
            
            <div class="buttonContainer">
              <img src="../src/assets/iteration-2/icons/3.svg"/>
              <a href="#Burger.html">Burger</a>
            </div>
            <div class="buttonContainer">
              <img src="../src/assets/iteration-2/icons/4.svg"/>
              <a href="#Kızartmalar.html">French fries</a>
            </div>
            
            <div class="buttonContainer">
              <img src="../src/assets/iteration-2/icons/5.svg"/>
              <a href="#Fast Food.html">Fast Food</a>   
            </div>
            
            <div class="buttonContainer">
              <img src="../src/assets/iteration-2/icons/6.svg"/>
              <a href="#Gazlıİçecek.html">Soft Drinks</a>
            </div>
             
          </div>
        </nav>
  
      </section>
  
    );
  }