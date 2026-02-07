import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import UnderConst from './components/UnderConst/UnderConst';
import Whatsapp from './components/WhatsApp/WhatsApp';
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <Hero/>
      <UnderConst/>
      <Whatsapp/>
      <Footer/>
    </div>
  );
}

export default App
