import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Historia from './components/Historia';

import Companias from './components/Companias';

import WhatsAppButton from './components/WhatsAppButton';

// import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css'
import fondo from '../src/assets/underConst.jpg';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router> */}
      {/* <Historia/>
      <Companias/> */}
      <WhatsAppButton/>
      {/* <Footer/> */}
    </div>
  );
}

export default App
