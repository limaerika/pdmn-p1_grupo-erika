import React, { useState } from 'react';
import LembreteEntrada from './LembreteEntrada';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [lembretes, setLembretes] = useState([]);

  const addLembrete = (novoLembrete) => {
    setLembretes(prevLembretes => [...prevLembretes, novoLembrete]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <LembreteEntrada onAddLembrete={addLembrete} />
        </div>
      </div>
    </div>
  );
}

export default App;
