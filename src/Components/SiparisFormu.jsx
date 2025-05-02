import React, { useState } from 'react';
import '../Components/Layout.css';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const initialForm = {
    Boyut: '',
    Hamur: '',
    EkMalzeme: [],
    SiparisNotu: '',
    Adet: '',
  };

export default function SiparisFormu() {
    const [form, setForm] = useState(initialForm)
    const history = useHistory();
    const [adet, setAdet] = useState(1);
    const [error, setError] = useState("");

    const secimlerFiyati = form.EkMalzeme.length * 5;
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
        const { value, checked } = e.target;
        let updated;
    
        if (checked && form.EkMalzeme.length < 10) {
          updated = [...form.EkMalzeme, value];
        } else if (!checked) {
          updated = form.EkMalzeme.filter((item) => item !== value);
        } else {
          return;
        }
    
        setForm((prev) => ({
          ...prev,
          EkMalzeme: updated,
        }));
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      
        if (!form.Boyut || !form.Hamur) {
          setError('Lütfen boyut ve hamur seçimini yapınız.');
          return;
        }
      
        if (form.EkMalzeme.length < 4) {
          setError('En az 4 malzeme seçmelisiniz.');
          return;
        }
      
        setError('');
      
        const postData = {
          ...form,
          Adet: adet,
          ToplamFiyat: toplam.toFixed(2),
        };
      
        axios.post('https://reqres.in/api/pizza', postData)
          .then((res) => {
            console.log("Sipariş Gönderildi:", res.data);
            setForm(initialForm);
            setAdet(1);
            history.push("/orderSuccess");
          })
          .catch((err) => {
            console.error("Sipariş Hatası:", err);
          });
      };
   
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

            <div className='withoutHeader'>
                <div className='zipi'>
                        <h1>Position Absolute Acı Pizza</h1>
                    <div className='zibik'>
                        <p>85.50₺</p>
                        <div className='puan'>
                            <p>4.9</p>
                            <p>(200)</p>
                        </div>
                    </div>
                    <p>Frontend Dev olaraka hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş matalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>

                <Form className='FormKap' onSubmit={handleSubmit}>
                    <div className='radio-select'>
                        <FormGroup className='radio'>
                            <h3> Boyut Seç <span style={{ color: 'red' }}>*</span></h3>
                            
                            <Label htmlFor='Küçük'>
                            <Input 
                            type="radio" 
                            name="Boyut" 
                            id="Küçük"
                            value="Küçük"
                            onChange={handleChange}
                            checked={form.Boyut==="Küçük"}/>
                            Küçük
                            </Label>
                        
                            
                            <Label htmlFor='Orta'>
                            <Input 
                            type="radio" 
                            name="Boyut" 
                            id="Orta"
                            value="Orta"
                            onChange={handleChange}
                            checked={form.Boyut==="Orta"}/>
                            
                            Orta
                            </Label>
                    
                            
                            <Label htmlFor='Büyük'>
                            <Input 
                            type="radio" 
                            name="Boyut" 
                            id="Büyük"
                            value="Büyük"
                            onChange={handleChange}
                            checked={form.Boyut==="Büyük"}/>
                            Büyük
                            </Label>
                        </FormGroup>
                    

                        <FormGroup>
                            <Label for="exampleSelect">
                                <h3>Hamur Seç <span style={{ color: 'red' }}>*</span></h3>
                            </Label>
                            <Input
                            id="exampleSelect"
                            name="Hamur"
                            type="select"
                            placeholder='Hamur Kalınlığı'
                            onChange={handleChange}
                            value={form.Hamur}
                            >
                            <option value="" disabled>
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
                            <p>En Fazla 10, En Az 4 malzeme Seçebilirsiniz. 5₺</p>
                        </div>
                        
                        <div className='checkBoxes'>
                            {malzemeList.map((malzeme, index) =>{
                                return(
                                <Label key={index} check>
                                <Input 
                                type="checkbox"
                                disabled={!form.EkMalzeme.includes(malzeme) && form.EkMalzeme.length >= 10}
                                value={malzeme}
                                onChange={handleMalzemeChange} 
                                checked={form.EkMalzeme.includes(malzeme)}
                                />
                                    {malzeme}
                                </Label>
                            )
                            })}
                        
                        </div>

                    </FormGroup>

                    <FormGroup>
                        <Label htmlFor="exampleText">
                        <h3>Sipariş Notu</h3>
                        </Label>
                        <Input
                        id="exampleText"
                        name="SiparisNotu"
                        type="textarea"
                        placeholder="Siparişine eklemek istediğin not var mı?"
                        onChange={handleChange}
                        value={form.SiparisNotu}
                        />
                    </FormGroup>

                    <div className='buttons'>
                        <div className='art-azl'>
                            <Button color="warning" onClick={azalt} >-</Button>
                            <p value={form.adet}>{adet}</p>
                            <Button color="warning" onClick={arttir}>+</Button>
                        </div>
                        
                        <div className='siparisVer'>
                            <p>Sipariş Toplamı</p>
                            <p>Seçimler: {secimlerFiyati.toFixed(2)}₺</p>
                            <p style ={{color:"red"}}>Toplam: {toplam.toFixed(2)}₺</p>
                            <Link to="/orderSuccess">
                            <Button type="submit" color="warning" className='sipVerBut'>SİPARİŞ VER</Button>
                            </Link>
                        </div>
                    </div>
                    
                </Form>

            </div>

              

        </section>

      );
    }