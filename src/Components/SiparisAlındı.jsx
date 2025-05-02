import React, { useState } from 'react';
import '../Components/Layout.css';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

export default function SiparisAlındı({form}) {
    const history = useHistory();

    console.log(form)
    const goHome = () => {
      history.push('/');
    };
  
    return (
      <section className="OrderSuccess">
        <div className="success-message">
          <h1>Siparişiniz Başarıyla Alındı!</h1>
          <p>Teşekkür ederiz! Siparişiniz işleme alındı. En kısa sürede size ulaştırılacaktır.</p>
          <Button color="warning" onClick={goHome}>Ana Sayfaya Dön</Button>
        </div>
      </section>
    );
  }