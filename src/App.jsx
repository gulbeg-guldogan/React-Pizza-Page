import './App.css'
import Header from '../src/Components/Header.jsx'
import NavMenu from '../src/Components/Sec-1.jsx'
import Cards from '../src/Components/Sec-2.jsx'
import EnCopk from './Components/Sec-3.jsx'
import ButtonMenu from './Components/Sec-4.jsx'
import Orta3 from './Components/Sec-5.jsx'
import Footer from './Components/Footer.jsx'
import SiparisFormu from './Components/SiparisFormu.jsx'
import SiparisAlındı from './Components/SiparisAlındı.jsx'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js'

function App() {
  

  return (
    <>
    <div>
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
          <SiparisFormu />
        </Route>

        <Route exact path="/orderSuccess">
          <SiparisAlındı />
        </Route>
          
        
      </Switch>
   
    </div>
      
    </>
  )
}

export default App
