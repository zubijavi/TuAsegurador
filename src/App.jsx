import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Historia from './components/Historia';
import Companias from './components/Companias';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css'
import Cotizador from './pages/Cotizador';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Cotizador/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
      {/* <Historia/>
      <Companias/> */}
      <WhatsAppButton/>
      <Footer/>
    </div>
  );
}

export default App
