import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import UnderConst from './components/UnderConst/UnderConst';

function App() {
  return (
    <div className='app-container'>
      <Navbar/>
      <UnderConst/>
    </div>
  );
}

export default App
