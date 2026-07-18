import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";

import Navbar from './components/Navbar/Navbar';
import UnderConst from './components/UnderConst/UnderConst';
import Ventajas from './components/Ventajas/Ventajas';
// import Whatsapp from './components/WhatsApp/WhatsApp';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import SeguroAutomotor from './pages/SeguroAutomotor';
import SeguroAgro from './pages/SeguroAgro';
import Cotizador from "./components/CotizadorTemp/Cotizador";

import './App.css';

function App() {
  return (
    <>

      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seguro-automotor" element={<SeguroAutomotor />} />
        <Route path="/seguro-agro" element={<SeguroAgro />} />
        <Route path="/cotizador" element={<Cotizador />} />

      </Routes>
      <UnderConst />
      <Ventajas />
      {/* <Whatsapp /> */}
      <Footer />
    </>
  );
}

export default App;