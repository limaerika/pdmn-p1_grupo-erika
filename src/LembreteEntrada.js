import React, { useState } from 'react';

function LembreteEntrada({ onAddLembrete }) {
  const [lembrete, setLembrete] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddLembrete(lembrete);
    setLembrete('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={lembrete}
        onChange={e => setLembrete(e.target.value)}
        placeholder="Digite um novo lembrete..."
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-2">Adicionar Lembrete</button>
    </form>
  );
}

export default LembreteEntrada;
