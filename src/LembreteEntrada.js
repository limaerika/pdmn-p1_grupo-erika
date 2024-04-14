import React, { useState } from 'react';

function LembreteEntrada({ onAddLembrete }) {
  const [lembrete, setLembrete] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!lembrete.trim()) return; // Impede a adição de lembretes vazios
    onAddLembrete(lembrete);
    setLembrete('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          value={lembrete}
          onChange={e => setLembrete(e.target.value)}
          placeholder="Digite um novo lembrete"
          className="form-control text-center mt-2 " 
        />
        <div className="input-group">
          <button
            type="submit"
            className="btn btn-primary form-control mt-2 "
            disabled={!lembrete.trim()} // Desabilita o botão se o campo estiver vazio
          >
            Adicionar Lembrete
          </button>
        </div>
      </div>
    </form>
  );
}

export default LembreteEntrada;

