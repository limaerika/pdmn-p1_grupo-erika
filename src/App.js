import React from 'react';
import LembreteEntrada from './LembreteEntrada';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  function addLembrete(lembrete) {
    console.log('Adicionar lembrete:', lembrete);
  }
  
  return (
    <div className="container text-center mt-5">
      <LembreteEntrada onAddLembrete={addLembrete} />
    </div>
  );
}

export default App;