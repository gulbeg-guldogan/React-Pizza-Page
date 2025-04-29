import React from 'react';
import '../Components/Sec-5.css';

export default function Orta3() {
    
    return (
        <section className="orta3lu">
        <div className="pizzalar">
          <img src="../src/assets/iteration-2/pictures/food-1.png"/>
          <h3>Terminal Pizza</h3>
          <div className="fiyatPuan">
            <p>4.9</p>
            <p>(200)</p>
            <p style={{fontweight: 700}}> 60₺</p>
          </div>
        </div>

        <div className="pizzalar">
          <img src="../src/assets/iteration-2/pictures/food-2.png"/>
          <h3>Position Absolute Acı Pizza</h3>
          <div className="fiyatPuan">
            <p>4.9</p>
            <p>(200)</p>
            <p style={{fontweight: 700}}> 60₺</p>
          </div>
        </div>

        <div className="pizzalar">
          <img src="../src/assets/iteration-2/pictures/food-3.png"/>
          <h3>useEffect Tavuklu Burger</h3>
          <div className="fiyatPuan">
            <p>4.9</p>
            <p>(200)</p>
            <p style={{fontweight: 700}}> 60₺</p>
          </div>
        </div>
      </section>
      
  
    );
  }