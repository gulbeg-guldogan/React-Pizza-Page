import React, { useState } from 'react';
import '../Components/Layout.css';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';

export default function SiparisFormu() {

    const [adet, setAdet] = useState(1);

    const [malzemeler, setMalzemeler] = useState([])
    const secimlerFiyati = malzemeler.length * 5;
    const urunFiyati = 85.50;
    const toplam = urunFiyati * adet + secimlerFiyati;

    const arttir = (e) => { 
        e.preventDefault()
        setAdet(adet + 1) };
    const azalt = (e) => {
        if(adet > 1) { 
            e.preventDefault()
            setAdet(adet - 1) }
    };

    const malzemeList = [
        'Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak', 'Ananas',
        'Sosis', 'Soğan', 'Sucuk', 'Biber', 'Kabak',
        'Kanada Jambonu', 'Domates', 'Jalepeno', 'Susam'
      ];

    const handleMalzemeChange = (e) => {
        const {value, checked} = e.target;
        if(checked && malzemeler.length <10)
        { 
            setMalzemeler([...malzemeler,value]);
        }
        else if (!checked)
        {
            setMalzemeler(malzemeler.filter((i)=> i!== value ))
        }
    }
   
    return ( 
        <section className='SiparisFormu'>
            
            <div className='SipForm-Ust'>
                <div className='logoTekn'>
                    <img/>
                </div>
                
                <Breadcrumb className='breadCrumb'>
                    <BreadcrumbItem><a href="/">AnaSayfa</a></BreadcrumbItem>
                    <BreadcrumbItem active><a href="#">Sipariş Oluştur</a></BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className='zipi'>
                <h1>Position Absolute Acı Pizza</h1>
                <div className='zibi'>
                    <p>4.9</p>
                    <p>(200)</p>
                    <p>60₺</p>                    
                </div>
                <p>Frontend Dev olaraka hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş matalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
            </div>

            <Form className='FormKap'>
                <div className='radio-select'>
                    <FormGroup className='radio'>
                        <h3> Boyut Seç </h3>
                        
                        <Label htmlFor='kucuk'>
                        <Input type="radio" name="BoyutSec" id="kucuk"/>
                        Küçük
                        </Label>
                    
                        
                        <Label htmlFor='orta'>
                        <Input type="radio" name="BoyutSec" id="orta"/>
                        Orta
                        </Label>
                
                        
                        <Label htmlFor='buyuk'>
                        <Input type="radio" name="BoyutSec" id="buyuk"/>
                        Büyük
                        </Label>
                    </FormGroup>
                

                    <FormGroup>
                        <Label for="exampleSelect">
                            Hamur Seç
                        </Label>
                        <Input
                        id="exampleSelect"
                        name="select"
                        type="select"
                        placeholder='Hamur Kalınlığı'
                        >
                        <option disabled>
                            Hamur Kalınlığı
                        </option>
                        <option>
                            Kalın 
                        </option>
                        <option>
                            İnce
                        </option>
                        <option>
                            İncecik
                        </option>
                        </Input>
                    </FormGroup>
                </div>

                <FormGroup className='checkBox' >
                    <div className='check-h3'>
                        <h3> Ek Malzemeler</h3>
                        <p>En Fazla 10 malzeme Seçebilirsiniz. 5₺</p>
                    </div>
                    
                    <div className='checkBoxes'>
                        {malzemeList.map((malzeme, index) =>{
                            return(
                             <Label key={index} check>
                             <Input 
                             type="checkbox"
                             disabled={!malzemeler.includes(malzeme) && malzemeler.length >= 10}
                             value={malzeme}
                             checked={malzemeler.includes(malzeme)}
                             onChange={handleMalzemeChange} />
                                 {malzeme}
                             </Label>
                        )
                        })}
                       
                    </div>

                </FormGroup>

                <FormGroup>
                    <Label htmlFor="exampleText">
                    Sipariş Notu
                    </Label>
                    <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    placeholder="Siparişine eklemek istediğin not var mı?"
                    />
                </FormGroup>

                <div>
                    <div>
                        <Button color="warning" onClick={azalt} >-</Button>
                        <span>{adet}</span>
                        <Button color="warning" onClick={arttir}>+</Button>
                    </div>
                    
                    <div>
                        <p>Seçimler: {secimlerFiyati.toFixed(2)}₺</p>
                        <p>Toplam: {toplam.toFixed(2)}₺</p>
                        <Button color="warning">SİPARİŞ VER</Button>
                    </div>
                </div>
                
            </Form>

           

       
           
               

        </section>

      );
    }