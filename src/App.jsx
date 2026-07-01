import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import UnderConst from './components/UnderConst/UnderConst';
import Ventajas from './components/Ventajas/Ventajas';
import Whatsapp from './components/WhatsApp/WhatsApp';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import SeguroAutomotor from './pages/SeguroAutomotor';
import SeguroAgro from './pages/SeguroAgro';

import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seguro-automotor" element={<SeguroAutomotor />} />
        <Route path="/seguro-agro" element={<SeguroAgro />} />
      </Routes>
      <UnderConst />
      <Ventajas />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;