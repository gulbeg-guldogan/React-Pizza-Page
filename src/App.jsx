import './App.css'
import Header from '../src/Components/Header.jsx'
import NavMenu from '../src/Components/Sec-1.jsx'
import Cards from '../src/Components/Sec-2.jsx'
import EnCopk from './Components/Sec-3.jsx'
import ButtonMenu from './Components/Sec-4.jsx'
import Orta3 from './Components/Sec-5.jsx'
import Footer from './Components/Footer.jsx'
import SiparisFormu from './Components/SiparisFormu.jsx'
import SiparisAlindi from './Components/SiparisAlındı.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'
import { useState } from 'react'

const initialForm = {
  Boyut: '',
  Hamur: '',
  EkMalzeme: [],
  SiparisNotu: '',
  Adet: 1,
};

function App() {
  const [form, setForm] = useState(initialForm)
  
  return (
    <>
    <div>
      <BrowserRouter>
        <Switch>

        <Route exact path="/">
        <Header />
        <NavMenu />
        <Cards />
        <EnCopk />
        <ButtonMenu />
        <Orta3 />
        <Footer />
        </Route>

        <Route exact path="/siparis">
          <SiparisFormu form={form} setForm={setForm}/>
        </Route>

        <Route exact path="/orderSuccess">
          <SiparisAlindi />
        </Route>
          

        </Switch>
      </BrowserRouter>
     
   
    </div>
      
    </>
  )
}

export default App
