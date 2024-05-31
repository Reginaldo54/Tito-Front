import React from 'react';
import { BrowserRouter as Router, RouterProvider, Route, Routes } from 'react-router-dom';

import './index.css'
import CadastrarEvento from './pages/cadastrarEvento/cadastrarEvento';



function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/' Component={CadastrarEvento} />
      </Routes>
    </Router>
  );
}

export default App