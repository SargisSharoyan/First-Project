import React from 'react';
import Navbar from './Navbar/Navbar';
import Player from './Player/player';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import NewRelease from './pages/newRelease';
import Shop from './pages/shop';
import Label from './pages/label';
import Chart from './pages/chart';
import SignUp from './pages/signup';


function App() {
  return (
    <Router>
      <Navbar />
      <Player />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/newRelease' exact element={<NewRelease />} />       
        <Route path='/shop' element={<Shop />} />
        <Route path='/label' element={<Label />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
    
  );
}

export default App;