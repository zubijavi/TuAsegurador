import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css'
import fondo from '../src/assets/underConst.jpg';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Podés agregar más rutas acá */}
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App
