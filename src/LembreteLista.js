import React from 'react';

function LembreteLista({ lembretes }) {
  return (
    <ul className="list-group">
      {lembretes.map((lembrete, index) => (
        <li key={index} className="list-group-item">{lembrete}</li>
      ))}
    </ul>
  );
}

export default LembreteLista;
