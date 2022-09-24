import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import List from './pages/list/List';

function App() {
  return (
    <div className='app' >
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/hotels' element={<List />} />
      <Route path='/hotels/:id' element={<Hotel />} />
    </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
