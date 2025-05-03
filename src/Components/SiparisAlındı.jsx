import React, { useState } from 'react';
import '../Components/Layout.css';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function SiparisAlindi() {
    const history = useHistory();
    const location = useLocation();
    const data = location.state

    console.log(data)
    const goHome = () => {
      history.push('/');
    };
  
    return (
      <section className="OrderSuccess">
        <div className='FotAl'>
          <img  />
        </div>

        <div className='LezYol'>
        <h3>lezzetin yolda</h3>
        </div>
          
        <div className="success-message">
          <div className='SipAlMes'>
            <h1>Sipariş Alındı!</h1>
          </div>

          <div className='PosPiz'>
            <p>Position Absolute Acı Pizza</p>
          </div>
          
          <div className='SipAlDet'>
            <p>Boyut:  <strong>{data.Boyut}</strong> </p> 
            <p>Hamur: <strong>{data.Hamur}</strong></p>
            <p>Ek Malzemeler: <strong>{data.EkMalzeme?.join(", ")}</strong></p>
            <p>Sipariş Notu:    <strong>{data.SiparisNotu}</strong></p>
          </div>

          <div className='SipTopAl'>
            <p>Sipariş Toplamı</p>
            <p>Seçimler:{data.EkMalzeme.length * 5}₺</p>
            <p>Toplam:{data.toplam}₺</p>
          </div>

          <Button color="warning" onClick={goHome}>Ana Sayfaya Dön</Button>
        </div>
      </section>
    );
  }