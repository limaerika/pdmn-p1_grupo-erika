import React, { useState } from 'react';
import LembreteEntrada from './LembreteEntrada';
import LembreteLista from './LembreteLista';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [lembretes, setLembretes] = React.useState([]);

  const addLembrete = (novoLembrete) => {
    setLembretes(prevLembretes => [...prevLembretes, novoLembrete]);
  };

  return (
    <div class="container-md">
      <div class="row align-itens-center">
        <div className="col">
        <LembreteLista />
        <LembreteEntrada onAddLembrete={addLembrete} />
        </div>
      </div>
    </div>
  );
}

export default App;
