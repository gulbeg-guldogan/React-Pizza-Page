import React from 'react';
import '../Components/Layout.css';

export default function Footer() {
    return (
        <footer className="Foot-Gen">
        <div className="footerUst">
          <div className="footerUst-left">
            <img src="../src/assets/iteration-2/footer/logo-footer.svg"/>
            <div className="iletisim">
              <img src="../src/assets/iteration-2/footer/icons/icon-1.png"/>
              <p>341 Londonderry Road,<br/> Istanbul Türkiye</p>
              </div>
              <div className="iletisim">
                <img src="../src/assets/iteration-2/footer/icons/icon-2.png"/>
                <p>aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="iletisim">
                <img src="../src/assets/iteration-2/footer/icons/icon-3.png"/>
                <p>+90 216 123 45 67</p>
              </div>
          </div>
          <div className="footerUst-right">
              <h2>Hot Menu</h2>
              <p>Terminal Pizza</p>
              <p>5 Kişilik Hackathlon Pizza</p>
              <p>useEffect Tavuklu Pizza</p>
              <p>Beyaz Console Frosty</p>
              <p>Testler Geçti Mutlu Burger</p>
              <p>Position Absolute Acı Burger</p>
          </div>
          <div className="Instagram">
            <p>Instagram</p>
            <div className="InsPic">
                <img src="../src/assets/iteration-2/footer/insta/li-0.png"/>
                <img src="../src/assets/iteration-2/footer/insta/li-1.png"/>
                <img src="../src/assets/iteration-2/footer/insta/li-2.png"/>
                <img src="../src/assets/iteration-2/footer/insta/li-3.png"/>
                <img src="../src/assets/iteration-2/footer/insta/li-4.png"/>
                <img src="../src/assets/iteration-2/footer/insta/li-5.png"/>
            </div>
          </div>
  
        </div>
        <div className="footerAlt">
          <div className="footerAlt-Y">
            <p>© 2023 Teknolojik Yemekler.</p>
          </div>
        </div>
      </footer>
    );
  }