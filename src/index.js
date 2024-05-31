import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CadastrarEvento from './pages/cadastrarEvento/cadastrarEvento.jsx';
import InscreverVisita from './pages/inscreverVisita/inscreverVisita.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <InscreverVisita/>
  </React.StrictMode>
)
