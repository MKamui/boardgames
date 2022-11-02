import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Easy from './components/Easy'
import Medium from './components/Medium'
import Hard from './components/Hard'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/easy' element={<Easy/>}/>
        <Route path='/medium' element={<Medium/>}/>
        <Route path='/hard' element={<Hard/>}/>
      </Routes>
    </div>
  );
}

export default App;
