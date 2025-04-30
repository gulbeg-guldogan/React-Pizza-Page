import React from 'react';
import '../Components/SiparisFormu.css';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function SiparisFormu() {
    

    return ( 
        <section className='SiparisFormu'>
            <div className='SipForm-Ust'>
                <img src="../src/assets/iteration-1/logo.svg"/>
            </div>

            <Form>
                <div>
                    <h1>Position Absolute Acı Pizza</h1>
                    <div>
                        <p>4.9</p>
                        <p>(200)</p>
                        <p>60₺</p>                    
                    </div>
                    <p>Frontend Dev olaraka hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş matalı buğday bazlı hamurdan oluşan italyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>

                </div>

                <FormGroup>
                    <h3> Boyut Seç </h3>
                    <Input type="radio" name="BoyutSec"  />
                    <Label id='BoyutSec'>
                    Küçük
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Input type="radio" name="BoyutSec" />
                    <Label id='BoyutSec'>
                    Orta
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Input type="radio" name="BoyutSec" />
                    <Label check>
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

                <FormGroup check>
                    <h3> Ek Malzemeler</h3>
                    <p>En Fazla 10 malzeme Seçebilirsiniz. 5₺</p>
                    <Input type="checkbox" />
                    <Label check>
                        Pepperoni
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Tavuk Izgara
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Mısır
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Sarımsak
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Ananas
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Sosis
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Soğan
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Sucuk
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Biber
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Kabak
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Kanada Jambonu
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Domates
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Jalepeno
                    </Label>
                    <Input type="checkbox" />
                    <Label check>
                        Susam
                    </Label>
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
                
            </Form>

        </section>

      );
    }