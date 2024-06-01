import React from 'react';
import { BrowserRouter as Router, RouterProvider, Route, Routes } from 'react-router-dom';

import './index.css'
import CadastrarEvento from './pages/cadastrarEvento/cadastrarEvento';
import InscreverVisita from './pages/inscreverVisita/inscreverVisita';
import TodasVisitas from './pages/todasVisitas/todasVisitas';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={TodasVisitas} />
        <Route path="/cadastrarEvento" Component={CadastrarEvento}/>
        <Route path="/inscreverVisita" Component={InscreverVisita}/>
        
      </Routes>
    </Router>
  );
}

export default App